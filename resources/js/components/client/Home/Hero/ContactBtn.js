import React from 'react';

const ContactBtn = (props) => {
	return (
		<div className="profile-btn">
			<button className="hire" onClick={props.onClick}>Hire me</button>
		</div>
	)
}

export default ContactBtn;