import React, {Component} from 'react';
import {connect} from 'react-redux';
import TinyMCE from 'react-tinymce';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import Processing from '../../utils/Processing';
import AdminButton from '../../utils/AdminButton';
import FileUpload from '../../utils/FileUpload';

class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adding: false
		}
	}
	render() {
		const meta = {title: "Add post - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Add post" active="Add post" items={[{name:"Posts", linkTo:"/admin/posts"}]}>

						<div className="col-sm-10 mx-auto">
							<form>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="title">Post title</label>
											<input type="text" id="title" autoFocus className="form-control" name="title"/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="tags">Post Tags</label>
											<input id="tags" type="text" className="form-control" name="tags"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label>Post images</label>
											<FileUpload/>
										</div>
										<div className="form-group">
											<label>Post category</label>
											<select defaultValue="" name="categoryId" className="form-control">
												<option value="" disabled>Select a category</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="description">Post content</label>
											<TinyMCE
												config={{
							          plugins: 'autolink link image lists print preview',
							          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
								        }}
											/>
										</div>
										<div className="form-group">
											<div className="form-check form-check-inline">
												<label htmlFor="published">
												<input type="radio" name='status' id="published"/> Publish
												</label>
											</div>
											<div className="form-check form-check-inline">
												<label htmlFor="draft">
												<input type="radio" name='status' defaultcheck="true" id="draft"/> Draft
												</label>
											</div>
										</div>
										<div className="form-group">
											<AdminButton text="Add Post"/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</ContentWrapper>
					<Processing open={this.state.adding} text="Adding post"/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}


export default connect()(AddPost);