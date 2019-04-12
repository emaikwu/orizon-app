import React, {Component} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import Formsy from 'formsy-react';

import Processing from '../../utils/Processing';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';
import AdminButton from '../../utils/AdminButton';
import AddForm from './AddForm';
import {editCategory, oneCategory} from '../../../actions/categories';


class EditCategory extends Component {
	constructor(props) {
		super(props);
		this.state ={
			category: {},
			editing: false
		}
		this.disableBtn = this.disableBtn.bind(this);
		this.enableBtn = this.enableBtn.bind(this);
		this.submit = this.submit.bind(this);
	}

	disableBtn () {
		this.setState({isValid:false});
	}

	enableBtn () {
		this.setState({isValid:true});
	}

	submit (model) {
		this.setState({editing: true});
		const id = this.props.match.params.id;
		let res = this.props.dispatch(editCategory(id, model));
		if(res) {
			this.setState({editing: false});
			this.props.history.push("/admin/categories");
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.dispatch(oneCategory(id)).then(res => {
			this.setState({category: res.payload});
		});
	}

	componentWillUnmount() {
		
	}

	render() {
		const title = this.state.category.name;
		const meta = {title: title ? `Edit ${title} - Emaikwu Innocent` : "Edit - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Edit Category" active="Edit category" items={[
						{name:"Categories", linkTo:"/admin/categories"},
						{name:"Add category", linkTo:"/admin/categories/add"}
					]}>
						<div className="col-sm-10 mx-auto">
							<Formsy onValidSubmit={this.submit} onValid={this.enableBtn} onInvalid={this.disableBtn}>
								<AddForm name="name" value={this.state.category.name} required/>
								<div className="form-group">
									<AdminButton disabled={!this.state.isValid} text="save"/>
								</div>
							</Formsy>
						</div>
					</ContentWrapper>
					<Processing open={this.state.editing} text="Saving update"/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

export default connect(mapStateToProps)(EditCategory);