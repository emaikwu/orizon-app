import React, {Component} from 'react';
import {connect} from 'react-redux';

import Processing from '../../utils/Processing';
import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
// import {addUser} from '../../../actions/users';
import AdminButton from '../../utils/AdminButton';
import Formsy from 'formsy-react';
import Inputs from './Inputs';
import CheckBox from './CheckBox';

class AddUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			adding: false,
			isValid: false
		}
		this.submit = this.submit.bind(this);
		this.disableBtn = this.disableBtn.bind(this);
		this.enableBtn = this.enableBtn.bind(this);
	}

	submit (model) {
		console.log(model);
		
	}

	disableBtn () {
		this.setState({isValid:false});
	}

	enableBtn () {
		this.setState({isValid:true});
	}

	render() {
		return (
			<AdminLayout>
				<ContentWrapper title="Add User" active="Add user" items={[{name:"Users", linkTo:"/admin/users"}]}>

					<div className="col-sm-8 mx-auto">
						<Formsy onValidSubmit={this.submit} onValid={this.enableBtn} onInvalid={this.disableBtn}>
							<Inputs name="name" autoFocus label="Name" type="text" validationError="Name is too short" validations="minLength:5" required/>
							<Inputs name="photo" label="Photo" type="file"/>
							<Inputs name="email" type="email" label="Email" validations="isEmail" validationError="Email not valid" required/>
							<Inputs name="password" type="password" label="password" validations="minLength:8" validationError="Password should be at least 8 characters" required/>
							<Inputs name="password2" type="password" validations="equalsField:password" label="confirm password" validationError="Password didn't match" required/>
							<div className="form-group">
								<div className="form-check form-check-inline">
									<label htmlFor="admin">
									<input type="radio" name='role' id="admin" defaultChecked=""/> Admin
									</label>
								</div>
								<div className="form-check form-check-inline">
									<label htmlFor="user">
									<input type="radio" name='role' id="user" defaultChecked=""/> User
									</label>
								</div>
							</div>
							<div className="form-group">
								<AdminButton disabled={!this.state.isValid} text="Add Category"/>
							</div>
						</Formsy>
					</div>
				</ContentWrapper>
				<Processing open={this.state.adding} text="Adding user"/>
			</AdminLayout>
		);
	}
}

export default connect()(AddUser);