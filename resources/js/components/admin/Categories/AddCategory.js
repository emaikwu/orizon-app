import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import {connect} from 'react-redux';
import Formsy from 'formsy-react';

import Processing from '../../utils/Processing';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';
import AdminButton from '../../utils/AdminButton';
import AddForm from './AddForm';
import {addCategory} from '../../../actions/categories';

class AddCategory extends Component {
	constructor(props){
		super(props);
		this.state = {
			adding: false,
			isValid: false
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
		this.setState({adding: true});
		this.props.dispatch(addCategory(model)).then(res => {
			if(res) {
				this.setState({adding: false});
				this.props.history.push("/admin/categories");
			}
		});
	}

	render() {
		const meta = {title: "Add Category - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Add category" active="Add Category" items={[{name:"Categories", linkTo:"/admin/categories"}]}>
						<div className="col-sm-10 mx-auto">
							<Formsy onValidSubmit={this.submit} onValid={this.enableBtn} onInvalid={this.disableBtn}>
								<AddForm name="name" required/>
								<div className="form-group">
									<AdminButton disabled={!this.state.isValid} text="Add Category"/>
								</div>
							</Formsy>
						</div>
					</ContentWrapper>
					<Processing 
						open={this.state.adding}
						text="Adding category"
					/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

export default connect()(AddCategory);