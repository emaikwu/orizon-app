import React, {Component} from 'react';
import {MdFeedback} from 'react-icons/md';
import {connect} from 'react-redux';

import {IconButton} from '@material-ui/core';
import FeedBack from '../utils/FeedBack';
import SocialMediaIcons from '../utils/SocialMediaIcons';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDialog: false
		}
		this.toggleDialog = this.toggleDialog.bind(this);
	}


	toggleDialog() {
		this.setState(prevState => ({
			openDialog: !prevState.openDialog
		}));
	}

  render() {
    return (
      <footer className="footer">
      	<SocialMediaIcons/>
      	<div className="footer-contact wrapper clearfix">
      		{this.props.phones[0] || this.props.phones[1] ? (
	      		<div className="phone cols-2">
	      			<h3>Phone</h3>
	      			<div className="footer-icon"></div>
	      			{this.props.phones.map((phone, i) => {
	      				return phone && <p key={i}>+234{phone}</p>
	      			})}
		      	</div>
      			) : null}
      		{
      			this.props.email ? 
      			<div className="email cols-2">
		      		<h3>Email</h3>
		      		<div className="footer-icon"></div>
		      		<p>{this.props.email}</p>
      			</div>

      			: null
      		}
      	</div>
      	<div className="copy">
      		<p>&copy; {new Date().getFullYear()} Emaikwu Innocent All rights reserved</p>
      	</div>
      	<IconButton
					style={{
						border: "1px solid #fff",
						background: "#2b55b6",
						color: "#fff",
						position: "fixed",
						right: "30px",
						bottom: "30px"
					}}
					onClick={this.toggleDialog}
				>
					<MdFeedback/>
				</IconButton>
				<FeedBack 
					open={this.state.openDialog}
					close={this.toggleDialog}
					title="Send your feedback"
				/>
      </footer>
    )
  }
}

const mapStateToProps = (state) => ({
	email: state.settings[0].email,
	phones: [state.settings[0].phone_1, state.settings[0].phone_2]
})

export default connect(mapStateToProps)(Footer);
