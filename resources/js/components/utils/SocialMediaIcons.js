import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';

const SocialMediaIcons = () => {
	return (
		<div className="social">
  		<div className="social-wrapper clearfix">
  			<ul className="social-group">
  				<li className="social-item"><a href="https://facebook.com/emai.innocent"><FaFacebookF/></a></li>
  				<li className="social-item"><a href="https://instagram.com/emaikwu_i"><FaInstagram/></a></li>
  				<li className="social-item"><a href="https://twitter.com/emaikwu_i"><FaTwitter/></a></li>
  				<li className="social-item"><a href="https://github.com/emaikwu"><FaGithub/></a></li>
  			</ul>
  		</div>
  	</div>
	)
}

export default SocialMediaIcons;