import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa';
import {connect} from 'react-redux';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import ActionDialog from '../../utils/ActionDialog';
import {allPosts} from '../../../actions/posts';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			delete: false,
			processing: false,
			text: "Delete Post?"
		}
		this.onDelete = this.onDelete.bind(this);
		this.cancleDelete = this.cancleDelete.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	cancleDelete() {
		this.setState({
			delete: false
		})
	}

	onDelete(e) {
		e.preventDefault();
		let postId = e.target.postId.value.trim();
		this.setState(prevState => ({
			delete: !prevState.delete
		}))
	}

	submitForm(e) {
		this.setState({processing:true, text:"Deleting post"});
	}

	componentDidMount() {
		this.props.dispatch(allPosts()).then(res => {
			this.setState({
				posts: res.payload 
			});
		})
	}

	render() {
		this.props.dispatch(allPosts());
		const meta = {title: "Manage posts - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Posts" active="Posts" items={[
					{name:"Add post", linkTo:"/admin/posts/add"}
					]}>

					<table className="table table-responsive table-bordered">
						<thead>
							<tr>
								<th>Image</th>
								<th>Title</th>
								<th>status</th>
								<th>Category</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{this.state.posts.map((post, i) => {
								return (
									<tr key={i}>
										<td></td>
										<td>{post.title}</td>
										<td>{post.status}</td>
										<td>{post.category_id}</td>
										<td><Link to={"/admin/posts/edit/" + post.id}>Edit</Link></td>
										<td>
											<form onSubmit={(e) => this.onDelete(e)}>
												<input type="hidden" defaultValue={post.id} name="postId"/>
												<button className="btn btn-danger btn-sm"><FaTrash/> Delete</button>
											</form>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
					<ActionDialog 
						open={this.state.delete}
						text={this.state.text}
						cancel={this.cancleDelete}
						processing={this.state.processing}
						delete={this.submitForm}
					/>
					</ContentWrapper>
				</AdminLayout>
			</DocumentMeta>	
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts
})

export default connect(mapStateToProps)(Posts);

