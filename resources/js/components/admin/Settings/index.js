import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import {connect} from 'react-redux';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import AdminButton from '../../utils/AdminButton';
import Processing from '../../utils/Processing';
// import {addSetting} from '../../../actions/settings';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adding: false,
			text: "Adding Data"
		}
	}

	render() {
		const meta = {title: "Application setting - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="App settings" active="App settings" items={[
						{name:"Edit settings", linkTo:"/admin/settings/edit/1"}
					]}>
					<div className="col-sm-10 mx-auto">
						
					</div>
					</ContentWrapper>
					<Processing open={this.state.adding} text={this.state.text} />
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

const mapStateToProps = (state) => ({
	settings: state.settings
});

export default connect()(Settings);