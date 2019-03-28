import React, {Component} from 'react';
import {Dialog, CircularProgress} from '@material-ui/core';

class ActionDialog extends Component {
	render() {
		return (
			<Dialog open={this.props.open}>
				<div className="card-body">
					{this.props.processing && 
						<div className="mx-auto" style={{width:"20px"}}>
							<CircularProgress thickness={8} 
								style={{width:"20px", height:"20px", color: "#007bff"}}/>
						</div>
					}
					<h4 className="processing_text">{this.props.text}</h4>
					<div className="mt-2">
						<button disabled={this.props.processing} onClick={this.props.cancel} className="btn btn-dark btn-sm mr-5">Cancel</button>
						<button disabled={this.props.processing} onClick={this.props.delete} className="btn btn-danger btn-sm">Delete</button>
					</div>
				</div>
			</Dialog>
		);
	}
}

export default ActionDialog;
