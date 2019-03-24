import React, {Component} from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import {MdFeedback} from 'react-icons/md';
import {IconButton, Dialog} from '@material-ui/core';

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
      	<div className="footer-wrapper">
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
	      	<div className="copy">
	      		<p>&copy; 2018 - {new Date().getFullYear()} Emaikwu Innocent All rights reserved</p>
	      	</div>
	      	<div className="footer-contact wrapper">
	      		<div className="phone">
	      			<h3>Phone</h3>
	      			<div className="footer-icon"></div>
		      		<p>+2348132338110</p>
		      		<p>+2348186355121</p>
		      	</div>
		      	<div className="email">
		      		<h3>Email</h3>
		      		<div className="footer-icon"></div>
		      		<p>support@emaikwuinnocent.com</p>
		      	</div>
	      	</div>
	      </div>
      	<IconButton
					style={{
						border: "1px solid #fff",
						background: "#2b55b6",
						color: "#fff",
						position: "fixed",
						right: "40px",
						bottom: "50px"
					}}
					onClick={this.toggleDialog}
				>
					<MdFeedback/>
				</IconButton>
				<Dialog
					open={this.state.openDialog}
					style={{
						background: "#fff",
						opacity:0.6
					}}
					onClick={this.toggleDialog}
				>
					<div className="card">
						<div className="card-body">

						</div>
					</div>
				</Dialog>
      </footer>
    )
  }
}

export default Header;
