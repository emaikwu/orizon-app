import React from 'react';

const AdminButton = (props) => {
	return (
			<button 
				type="submit" 
				disabled={props.disabled} 
				className={props.disabled ? 'admin_btn disabled' : "admin_btn"}>
				{props.text}
			</button>
	)
}

export default AdminButton;