import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';

import ActionDialog from '../../utils/ActionDialog';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
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
		const id = document.getElementById('delete-form').product_id.value.trim();
		this.props.dispatch(removeCategory(id));
		setTimeout(() => {
			this.setState({delete: false, deleting: false, actionText: "Delete category?"})
		}, 1000);
	}

	submitDelete (e) {
		e.preventDefault();
		this.setState({delete: true});
	}

	componentDidMount() {
		axios.get('/api/v1/categories').then(res => this.setState({categories: res.data}))
	}

	render() {
		return (
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
								{this.state.categories.map((category, i) => 
									(
										<tr key={i}>
											<td><Link to={`/admin/categories/${category.id}`}>{category.name}</Link></td>
											<td>
												<Link to={`/admin/categories/edit/${category.id}`}>Edit</Link>
											</td>
											<td>
												<form className="text-center" id="delete-form" onSubmit={this.submitDelete}>
													<input type="hidden" name="category_id" value={category.id}/>
													<button className="btn btn-danger btn-sm"><FaTrashAlt/></button>
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
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories
})

export default connect(mapStateToProps)(Categories);