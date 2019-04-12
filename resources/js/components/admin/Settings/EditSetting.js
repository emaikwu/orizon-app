import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import {connect} from 'react-redux';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';
import AdminButton from '../../utils/AdminButton';
import Processing from '../../utils/Processing';
import {oneSetting, editSetting} from '../../../actions/settings';

class EditSetting extends Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			adding: false,
			text: "Saving Data",
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
		this.props.dispatch(editSetting(this.state.setting.id, data)).then(res => {
			if(res) {
				this.setState({adding: false});
			}
		})
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.dispatch(oneSetting(id)).then(res => {
			this.setState({setting: res.payload});
		})
	}

	render() {
		const data = this.state.setting;
		const meta = {title: "Edit settings - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper 
					title="Edit settings"
					active="Edit settings"
					items={[{name: "App Settings", linkTo: "/admin/settings"}]}
					>
					<div className="col-sm-10 mx-auto">
						<form onSubmit={(e) => this.submitForm(e)}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="instagram">Instagram URL</label>
										<input type="text" id="instagram" autoFocus className="form-control" name="instagram" defaultValue={data.instagram}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="github">Github URL</label>
										<input type="text" id="github" className="form-control" name="github"
											defaultValue={data.github}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="facebook">Facebook URL</label>
										<input type="text" id="facebook" className="form-control" name="facebook"
											defaultValue={data.facebook}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="twitter">Twitter URL</label>
										<input type="text" className="form-control" id="twitter" name="twitter"
											defaultValue={data.twitter}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="youtube">Youtube URL</label>
										<input type="text" id="youtube" 	className="form-control" name="youtube"
											defaultValue={data.youtube}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="snapchat">Snapchat URL</label>
										<input type="text" className="form-control" id="snapchat" name="snapchat"
											defaultValue={data.snapchat}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="phone_1">Phone 1</label>
										<input type="text" id="phone_1" className="form-control" name="phone_1"
											defaultValue={data.phone_1}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="phone_2">Phone 2</label>
										<input type="text" className="form-control" name="phone_2" id="phone_2"
											defaultValue={data.phone_2}
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label htmlFor="email">Email address</label>
										<input id="email" type="email" className="form-control" name="email"
											defaultValue={data.email}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="home_photo">Home photo</label>
										<input type="file" className="form-control" name="home_photo" id="home_photo"
											defaultValue={data.home_photo}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="intro">Home page intro</label>
										<textarea id="" id="intro" className="form-control" name="intro">{data.intro}</textarea>
									</div>
									<div className="form-group">
										<AdminButton text="Save data"/>
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

export default connect()(EditSetting);