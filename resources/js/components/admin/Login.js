import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginUser} from '../../actions/auth';
import {Auth} from '../../actions/auth';

class Login extends Component {

	attemptLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value.trim();
		const password = e.target.password.value.trim();
		this.props.dispatch(loginUser({email, password}))
		.then(res => {
			if(res.payload.success === true) {
				this.props.dispatch(Auth())
				.then(response => {
					if(response.payload.isAuthenticated) {
						this.props.history.push('/admin')

					}
				})
			}
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 mx-auto log">
						<div className="login_wrapper">
							<div className="login_container">
								<div className="login">
									<div className="login_heading">
										<h1>LOGIN</h1>
									</div>
									<div className="login_form">
										<form onSubmit={(e) => this.attemptLogin(e)}>
											<div className="form-group">
												<input type="email" autoFocus className="form-control" name="email" placeholder="Email"/>
											</div>
											<div className="form-group">
												<input type="password" className="form-control" name="password" placeholder="Password"/>
											</div>
											<div className="form-group">
												<button className="btn btn-light">Login</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>
		);
	}
}

export default connect()(Login);