import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import {connect} from 'react-redux';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import AdminButton from '../../utils/AdminButton';
import Processing from '../../utils/Processing';
import {addSetting, allSettings} from '../../../actions/settings';

class AddSetting extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			adding: false,
			text: "Adding Data",
			setting: {}
		}
	}

	submitForm(e) {
		e.preventDefault();

		const instagram = e.target.instagram.value.trim();
		const twitter = e.target.twitter.value.trim();
		const github = e.target.github.value.trim();
		const youtube = e.target.youtube.value.trim();
		const snapchat = e.target.snapchat.value.trim();
		const facebook = e.target.facebook.value.trim();
		const phone_1 = e.target.phone_1.value.trim();
		const phone_2 = e.target.phone_2.value.trim();
		const email = e.target.email.value.trim();
		const home_photo = e.target.home_photo.value.trim();
		const intro = e.target.intro.value.trim();

		const data = {
			instagram, 
			twitter, 
			github, 
			youtube, 
			snapchat,
			facebook,
			phone_1,
			phone_2,
			email,
			home_photo,
			intro
		};

		this.setState({adding: true});
		this.props.dispatch(addSetting(data)).then(res => {
			if(res) {
				this.setState({adding: false});
			}
		})
	}

	componentDidMount() {
		this.props.dispatch(allSettings())
		.then(res => {
			let setting = res.payload;
			if(setting.length > 0) {
				this.props.history.push("/admin/settings");
			}
		})
	}

	render() {
		const meta = {title: "Add settings - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper 
						title="Add settings"
						active="Add settings"
						items={[{name:"App settings", linkTo:"/admin/settings"}]}
						>
					<div className="col-sm-10 mx-auto">
						<form onSubmit={(e) => this.submitForm(e)}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="instagram">Instagram URL</label>
										<input type="text" id="instagram" autoFocus className="form-control" name="instagram"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="github">Github URL</label>
										<input type="text" id="github" className="form-control" name="github"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="facebook">Facebook URL</label>
										<input type="text" id="facebook" className="form-control" name="facebook"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="twitter">Twitter URL</label>
										<input type="text" className="form-control" id="twitter" name="twitter"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="youtube">Youtube URL</label>
										<input type="text" id="youtube" className="form-control" name="youtube"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="snapchat">Snapchat URL</label>
										<input type="text" className="form-control" id="snapchat" name="snapchat"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="phone_1">Phone 1</label>
										<input type="text" id="phone_1" className="form-control" name="phone_1"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="phone_2">Phone 2</label>
										<input type="text" className="form-control" name="phone_2" id="phone_2"/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label htmlFor="email">Email address</label>
										<input id="email" type="email" className="form-control" name="email"/>
									</div>
									<div className="form-group">
										<label htmlFor="home_photo">Home photo</label>
										<input type="file" className="form-control" name="home_photo" id="home_photo"/>
									</div>
									<div className="form-group">
										<label htmlFor="intro">Home page intro</label>
										<textarea id="" id="intro" className="form-control" name="intro"></textarea>
									</div>
									<div className="form-group">
										<AdminButton text="Add Data"/>
									</div>
								</div>
							</div>
						</form>
					</div>
					</ContentWrapper>
					<Processing open={this.state.adding} text={this.state.text} />
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

export default connect()(AddSetting);