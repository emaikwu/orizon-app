import React, {Component} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import Processing from '../../utils/Processing';
import {oneUser, editUser} from '../../../actions/users';
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
		const role = e.target.role.value.trim();

		const data = {role};

		this.setState({editing: true});

		const id = this.props.match.params.id;
		const res = this.props.dispatch(editUser(id, data));
		console.log(res);
		if(res) {
			this.setState({editing: false});
			this.props.history.push("/admin/users");
		}
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.dispatch(oneUser(id)).then(res => {
			this.setState({user: res.payload})
		})
	}

	render() {
		const user = this.state.user;
		const meta = {title: user.id ? `Edit ${user.first_name} ${user.last_name} - Emaikwu Innocent` : "Edit - Emaikwu Innocent"}
		return (
			<DocumentMeta {...meta}>
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
												<input type="radio" name='role' id="admin" defaultChecked={this.state.user.role === "admin" ? true : null}
													defaultValue="admin"
												/> Admin
												</label>
											</div>
											<div className="form-check form-check-inline">
												<label htmlFor="user">
												<input type="radio" name='role' id="user" defaultChecked={this.state.user.role === "user" ? true : null}
													defaultValue="user"
												/> User
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
			</DocumentMeta>
		);
	}
}

export default connect()(EditUser);