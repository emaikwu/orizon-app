import React, {Component} from 'react';
import {connect} from 'react-redux';

import Processing from '../../utils/ActionDialog';
import ContentWrapper from '../ContentWrapper';
import AdminLayout from '../../layout/AdminLayout';
import AdminButton from '../../utils/AdminButton';
// import {allCategories, removeCategory} from '../../../actions/categories';


class EditCategory extends Component {
	constructor(props) {
		super(props);
		this.state ={
			category: [],
			editing: false
		}
	}

	render() {
		return (
			<AdminLayout>
				<ContentWrapper title="Edit Category" active="Edit category" items={[
					{name:"Categories", linkTo:"/admin/categories"},
					{name:"Add category", linkTo:"/admin/categories/add"}
				]}>
					<div className="col-sm-10 mx-auto">
						<form>
							<div className="form-group">
								<label htmlFor="name">Category name</label>
								<input type="text" className="form-control" name="name" id="name"/>
							</div>
							<div className="form-group">
								<AdminButton text="Save"/>
							</div>
						</form>
					</div>
				</ContentWrapper>
				<Processing open={this.state.editing} text="Saving changes"/>
			</AdminLayout>
		);
	}
}


export default connect()(EditCategory);