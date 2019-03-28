import React, {Component} from 'react';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, DialogContentText } from '@material-ui/core';

class FeedBack extends Component {
	render() {
		return (
			<div className="email-form">
				<form>
					<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email address"
            type="email"
            fullWidth
          />	
          <TextField
	          id="outlined-textarea"
	          label="Message"
	          placeholder="Your feedback message"
	          multiline
	          margin="normal"
	          variant="outlined"
	          rows="5"
	          fullWidth
	        />
	      </form>
			</div>
		);
	}
}

export default FeedBack;