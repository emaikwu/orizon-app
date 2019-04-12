import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import DocumentMeta from 'react-document-meta';

import ActionDialog from '../../utils/ActionDialog';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';
import {allCategories, removeCategory} from '../../../actions/categories';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			category_id: null,
			delete: false,
			deleting: false,
			actionText: "Delete category?"
		}
		this.cancelDelete = this.cancelDelete.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
		this.submitDelete = this.submitDelete.bind(this);
	}

	cancelDelete () {
		this.setState({delete:false});
	}

	deleteCategory () {
		this.setState({deleting: true, actionText: "Deleting category"});
		const res = this.props.dispatch(removeCategory(this.state.category_id));
		if(res) {
			this.setState({delete: false, deleting: false});
		}
	}

	submitDelete (e) {
		e.preventDefault();
		const id = e.target.category_id.value.trim();
		this.setState({category_id: id});
		this.setState({delete: true});
	}

	componentWillMount() {
		this.props.dispatch(allCategories())
		.then(res => {
			this.setState({categories: res.payload})
		})
	}

	render() {
		const meta = {title: "Manage categories - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Categories" active="Categories" items={[{name:"Add category", linkTo:"/admin/categories/add"}]}>
						<div className="col-sm-10 mx-auto">
							<table className="table table-bordered table-responsive">
								<thead>
									<tr>
										<th>NAME</th>
										<th>EDIT</th>
										<th>DELETE</th>
									</tr>
								</thead>
								<tbody>
									{this.props.categories.map((category, i) => 
										(
											<tr key={i}>
												<td>{category.name}</td>
												<td>
													<Link to={`/admin/categories/edit/${category.id}`}>Edit</Link>
												</td>
												<td>
													<form className="text-center" id="delete-form" onSubmit={this.submitDelete}>
														<input type="hidden" name="category_id" value={category.id}/>
														<button className="btn btn-danger btn-sm"><FaTrashAlt/> Delete</button>
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
						open={this.state.delete}
						text={this.state.actionText}
						processing={this.state.deleting}
						cancel={this.cancelDelete}
						delete={this.deleteCategory}
						submit={(e) =>this.submitDelete(e)}
					/>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
})

export default connect(mapStateToProps)(Categories);