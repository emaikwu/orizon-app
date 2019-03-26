import React, {Component} from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import {MdFeedback} from 'react-icons/md';

import {IconButton} from '@material-ui/core';
import FeedBack from '../utils/FeedBack';

class Header extends Component {
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
      	<div className="social">
      		<div className="social-title">
      			<h2>Lets Socialize</h2>
      		</div>
      		<div className="social-wrapper clearfix">
      			<ul className="social-group">
      				<li className="social-item"><a href="https://facebook.com/emai.innocent"><FaFacebookF/></a></li>
      				<li className="social-item"><a href="https://instagram.com/emaikwu_i"><FaInstagram/></a></li>
      				<li className="social-item"><a href="https://twitter.com/emaikwu_i"><FaTwitter/></a></li>
      				<li className="social-item"><a href="https://github.com/emaikwu"><FaGithub/></a></li>
      			</ul>
      		</div>
      	</div>
      	<div className="footer-contact wrapper clearfix">
      		<div className="phone cols-2">
      			<h3>Phone</h3>
      			<div className="footer-icon"></div>
	      		<p>+2348132338110</p>
	      		<p>+2348186355121</p>
	      	</div>
	      	<div className="email cols-2">
	      		<h3>Email</h3>
	      		<div className="footer-icon"></div>
	      		<p>support@emaikwuinnocent.com</p>
	      	</div>
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

export default Header;
