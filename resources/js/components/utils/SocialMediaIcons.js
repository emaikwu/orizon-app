import React from 'react';
import {connect} from 'react-redux';
import {FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube, FaSnapchat} from 'react-icons/fa';

const SocialMediaIcons = (props) => {
	return (
		<div className="social">
  		<div className="social-wrapper clearfix">
  			<ul className="social-group">
          {props.social.facebook && <li className="social-item"><a href={props.social.facebook}><FaFacebookF/></a></li>}
          {props.social.instagram && <li className="social-item"><a href={props.social.instagram}><FaInstagram/></a></li>}
          {props.social.twitter && <li className="social-item"><a href={props.social.twitter}><FaTwitter/></a></li>}
          {props.social.github && <li className="social-item"><a href={props.social.github}><FaGithub/></a></li>}
          {props.social.youtube && <li className="social-item"><a href={props.social.youtube}><FaYoutube/></a></li>}
          {props.social.snapchat && <li className="social-item"><a href={props.social.snapchat}><FaSnapchat/></a></li>}
  			</ul>
  		</div>
  	</div>
	)
}

const mapStateToProps = (state) => ({
  social: state.settings[0]
});

export default connect(mapStateToProps)(SocialMediaIcons);