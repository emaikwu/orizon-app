import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FaPencilAlt} from 'react-icons/fa';
import {GoTrashcan} from 'react-icons/go';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import ActionDialog from '../../utils/ActionDialog';
import {allUsers, deleteUser} from '../../../actions/users';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			user_id: null,
			delete: false,
			deleting: false,
			actionText: "Delete User?"
		}
		this.cancelDelete = this.cancelDelete.bind(this);
		this.submitDelete = this.submitDelete.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	cancelDelete () {
		this.setState({delete:false});
	}

	submitDelete (e) {
		e.preventDefault();
		this.setState({delete: true, user_id: e.target.user_id.value.trim()});
	}

	deleteUser () {
		this.setState({deleting: true, actionText: "Deleting user"});
		const res = this.props.dispatch(deleteUser(this.state.user_id));
		if(res) {
			this.setState({
				deleting: false,
				delete: false,
				actionText: "Delete User?"
			});
		}
	}

	componentDidMount() {
		this.props.dispatch(allUsers())
		.then(res => {
			this.setState({users: res.payload});
		})
	}

	render() {
		const meta = {title: "Manage Users - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Users" active="Users" items={[{name:"Add user", linkTo:"/admin/users/add"}]}>

						<div className="col-sm-10 mx-auto">
								<table className="table table-bordered table-responsive">
									<thead>
										<tr>
											<th>PHOTO</th>
											<th>NAME</th>
											<th>EMAIL</th>
											<th>ROLE</th>
											<th>EDIT</th>
											<th>DELETE</th>
										</tr>
									</thead>
									<tbody>
										{this.state.users.map((user, i) => 
											(
												<tr key={i}>
													<td><img src="" alt=""/></td>
													<td><Link to={`/admin/users/${user.id}`}>{user.name}</Link></td>
													<td>{user.email}</td>
													<td>{user.role}</td>
													<td>
														<Link to={`/admin/users/edit/${user.id}`}>Edit</Link>
													</td>
													<td>
														<form className="text-center" id="delete-form" onSubmit={this.submitDelete}>
															<input type="hidden" name="user_id" defaultValue={user.id}/>
															<button className="btn btn-danger btn-sm"><GoTrashcan/> Delete</button>
														</form>
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
						</div>
					</ContentWrapper>
					<ActionDialog 
						text={this.state.actionText}
						open={this.state.delete}
						processing={this.state.deleting}
						cancel={this.cancelDelete}
						submit={this.submitDelete}
						delete={this.deleteUser}
					/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

export default connect()(User);