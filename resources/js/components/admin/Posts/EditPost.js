import React, {Component} from 'react';
import {connect} from 'react-redux';
// import TinyMCE from 'react-tinymce';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import Processing from '../../utils/Processing';
import AdminButton from '../../utils/AdminButton';
import FileUpload from '../../utils/FileUpload';
import {onePost, editPost} from '../../../actions/posts';
import {allCategories} from '../../../actions/categories';

class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {}
		}
		this.submit = this.submit.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(allCategories());
		const id = this.props.match.params.id;
		this.props.dispatch(onePost(id))
		.then(res => {
			this.setState({
				post: {...res.payload}
			});
		})
	}

	submit(e) {
		e.preventDefault();
	}

	render() {
		const data = this.state.post;
		const meta = {title: "Edit - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Edit post" active="Edit post" items={[
						{name:"Posts", linkTo:"/admin/posts"},
						{name:"Add post", linkTo:"/admin/posts/add"}
						]}>

						<div className="col-sm-10 mx-auto">
							<form onSubmit={(e) => this.submit(e)}>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="title">Post title</label>
											<input type="text" id="title" autoFocus className="form-control" name="title"
												defaultValue={data.title}
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="tags">Post Tags</label>
											<input id="tags" type="text" className="form-control" name="tags"
												defaultValue={data.tags}
											/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label>Post images</label>
											<FileUpload name="images"/>
										</div>
										<div className="form-group">
											<label>Post category</label>
											<select defaultValue={data.category_id} name="categoryId" className="form-control">
												<option value="" disabled>Select a category</option>
												{this.props.categories.map((category, i) => {
													return <option key={i} value={category.id}>{category.name}</option>
												})}
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="content">Post content</label>
											<textarea className="form-control" id="content" name="content"
												defaultValue={data.content}
											></textarea>
										</div>
										<div className="form-group">
											<div className="form-check form-check-inline">
												<label htmlFor="published">
												<input type="radio" name='status' id="published" defaultValue="published"
													defaultChecked={true}
												/> Publish
												</label>
											</div>
											<div className="form-check form-check-inline">
												<label htmlFor="draft">
												<input type="radio" name='status' defaultChecked={data.status == "draft" ? true : false} id="draft"
													defaultValue="draft"
												/> Draft
												</label>
											</div>
										</div>
										<div className="form-group">
											<AdminButton text="Save"/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</ContentWrapper>
				</AdminLayout>
			</DocumentMeta>	
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

export default connect(mapStateToProps)(EditPost);