import React, {Component} from 'react';
import {connect} from 'react-redux';
import Formsy from 'formsy-react';

import Processing from '../../utils/Processing';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';
import AdminButton from '../../utils/AdminButton';
import AddForm from './AddForm';
// import {addCategory} from '../../../actions/categories';

class AddCategory extends Component {
	constructor(props){
		super(props);
		this.state = {
			adding: false,
			isValid: false
		}
	}

	disableBtn () {
		// this.setState({isValid:false});
	}

	enableBtn () {
		// this.setState({isValid:true});
	}

	submit (model) {
		console.log(model);
		// console.log(this.state.isValid);
	}

	render() {
		return (
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
		);
	}
}

export default connect()(AddCategory);