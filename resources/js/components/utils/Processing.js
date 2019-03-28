import React, {Component} from 'react';
import {Dialog, CircularProgress} from '@material-ui/core';

class Processing extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Dialog open={this.props.open}>
						<div className="card-body">
							<div className="mx-auto" style={{width:"20px"}}>
								<CircularProgress thickness={8} 
									style={{width:"20px", height:"20px", color: "#007bff"}}/>
							</div>
							<h4 className="processing_text">{this.props.text}</h4>
						</div>
				</Dialog>
		);
	}
}


export default Processing;