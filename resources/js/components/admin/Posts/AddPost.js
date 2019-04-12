import React, {Component} from 'react';
import {connect} from 'react-redux';
import TinyMCE from 'react-tinymce';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import Processing from '../../utils/Processing';
import AdminButton from '../../utils/AdminButton';
import FileUpload from '../../utils/FileUpload';
import {allCategories} from '../../../actions/categories';
import {addPost} from '../../../actions/posts';

class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adding: false
		}
		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault();

		const title = e.target.title.value.trim();
		const tags = e.target.tags.value.trim();
		const images = e.target.images.value.trim();
		const category_id = e.target.categoryId.value.trim();
		const content = e.target.content.value.trim();
		const status = e.target.status.value.trim();

		const data = {title, tags, images, category_id, content, status, user_id:1};

		this.setState({adding: true});

		this.props.dispatch(addPost(data)).then(res => {
			if(res) {
				this.setState({adding: false});
				this.props.history.push("/admin/posts");
			}
		})
	}

	componentDidMount() {
		this.props.dispatch(allCategories());
	}

	render() {
		const meta = {title: "Add post - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Add post" active="Add post" items={[{name:"Posts", linkTo:"/admin/posts"}]}>

						<div className="col-sm-10 mx-auto">
							<form onSubmit={(e) => this.submit(e)}>
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
											<FileUpload name="images"/>
										</div>
										<div className="form-group">
											<label>Post category</label>
											<select defaultValue="" name="categoryId" className="form-control">
												<option value="" disabled>Select a category</option>
												{this.props.categories.map((category, i) => {
													return <option key={i} value={category.id}>{category.name}</option>
												})}
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="content">Post content</label>
											<textarea className="form-control" id="content" name="content"></textarea>
										</div>
										<div className="form-group">
											<div className="form-check form-check-inline">
												<label htmlFor="published">
												<input type="radio" name='status' id="published"
													defaultValue="published"
												/> Publish
												</label>
											</div>
											<div className="form-check form-check-inline">
												<label htmlFor="draft">
												<input type="radio" name='status' defaultChecked id="draft"
													defaultValue="draft"
												/> Draft
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

const mapStateToProps = (state) => ({
	categories: state.categories
});

export default connect(mapStateToProps)(AddPost);