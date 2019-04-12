import React, {Component} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';

import Processing from '../../utils/Processing';
import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import {addUser} from '../../../actions/users';
import AdminButton from '../../utils/AdminButton';

class AddUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			adding: false,
			isValid: true
		}
		this.submit = this.submit.bind(this);
		this.disableBtn = this.disableBtn.bind(this);
		this.enableBtn = this.enableBtn.bind(this);
	}

	submit (e) {
		e.preventDefault();		

		const first_name = e.target.first_name.value.trim();
		const last_name = e.target.last_name.value.trim();
		const email = e.target.email.value.trim();
		const photo = e.target.photo.value.trim();
		const password = e.target.password.value.trim();
		const password2 = e.target.password2.value.trim();
		const role = e.target.role.value.trim();

		const data = {first_name, last_name, email, photo, password, role};

		this.setState({adding: true});

		this.props.dispatch(addUser(data)).then(res => {
			if(res) {
				this.setState({adding: false});
				this.props.history.push("/admin/users");
			}
		})
	}

	disableBtn () {
		this.setState({isValid:false});
	}

	enableBtn () {
		this.setState({isValid:true});
	}

	render() {
		const meta = {title: 'Add user - Emaikwu Innnocent'};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Add User" active="Add user" items={[{name:"Users", linkTo:"/admin/users"}]}>

						<div className="col-sm-10 mx-auto">
							<form onSubmit={(e) => this.submit(e)}>
								<div className="row">
									<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="first_name">First name</label>
													<input type="text" id="first_name" autoFocus className="form-control" name="first_name"/>
												</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="last_name">Last name</label>
											<input id="last_name" type="text" className="form-control" name="last_name"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="photo">User photo</label>
											<input id="photo" type="file" className="form-control" name="photo"/>
										</div>
										<div className="form-group">
											<label htmlFor="email">Email address</label>
											<input id="email" type="text" className="form-control" name="email"/>
										</div>
										<div className="form-group">
											<label htmlFor="password">Password</label>
											<input id="password" type="password" className="form-control" name="password"/>
										</div>
										<div className="form-group">
											<label htmlFor="password2">Comfirm password</label>
											<input id="password2" type="password" className="form-control" name="password2"/>
										</div>
										<div className="form-group">
											<div className="form-check form-check-inline">
												<label htmlFor="admin">
												<input type="radio" name='role' id="admin"
													defaultValue="admin"
												/> Admin
												</label>
											</div>
											<div className="form-check form-check-inline">
												<label htmlFor="user">
												<input type="radio" name='role' id="user" defaultChecked
													defaultValue="user"
												/> User
												</label>
											</div>
										</div>
										<div className="form-group">
											<AdminButton disabled={!this.state.isValid} text="Add User"/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</ContentWrapper>
					<Processing open={this.state.adding} text="Adding user"/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

export default connect()(AddUser);