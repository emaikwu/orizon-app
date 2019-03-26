import React, {Component} from 'react';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, DialogContentText } from '@material-ui/core';

class FeedBack extends Component {
	render() {
		return (
			<Dialog
					open={this.props.open}
				>
					<DialogTitle className="feedback-title">{this.props.title}</DialogTitle>
					<DialogContent>
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
					</DialogContent>
					<DialogActions>
            <Button onClick={this.props.close} color="primary">
              Cancel
            </Button>
            <Button color="primary">
              Send Email
            </Button>
          </DialogActions>
				</Dialog>
		);
	}
}

export default FeedBack;