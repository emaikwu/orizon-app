import React, {Component} from 'react';
import {connect} from 'react-redux';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import Processing from '../../utils/Processing';
// import {oneUser} from '../../../actions/users';
import AdminButton from '../../utils/AdminButton';

class EditUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			user:{}
		}
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm (e) {
		e.preventDefault();
	}

	componentDidMount() {
		// let id = this.props.match.params.id;
		// this.props.dispatch(oneUser(id)).then(res => {
		// 	this.setState({user: res.payload.user})
		// })
	}

	render() {
		return (
			<AdminLayout>
				<ContentWrapper title="Edit User" active="Edit user" items={[
					{name:"Users", linkTo:"/admin/users"},
					{name:"Add user", linkTo:"/admin/users/add"}]}>

					<div className="col-sm-10 mx-auto">
						<form onSubmit={(e) => this.submitForm(e)}>
							<div className="row">
								<div className="col-md-12">
									<label>User role</label>
									<div className="form-group">
										<div className="form-check form-check-inline">
											<label htmlFor="admin">
											<input type="radio" name='role' id="admin" defaultChecked={this.state.user.role === "admin" ? true : null}/> Admin
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label htmlFor="user">
											<input type="radio" name='role' id="user" defaultChecked={this.state.user.role === "user" ? true : null}/> User
											</label>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password</label>
										<input id="password" type="password" className="form-control" name="password"/>
									</div>
									<div className="form-group">
										<AdminButton text="SAVE"/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</ContentWrapper>
				<Processing open={this.state.editing} text="Saving changes"/>
			</AdminLayout>
		);
	}
}

export default connect()(EditUser);