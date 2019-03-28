import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';

class Inputs extends Component {
	constructor(props) {
		super(props);
		this.changeValue = this.changeValue.bind(this);
	}
 	changeValue (e) {
		this.props.setValue(e.currentTarget.value);
	}
	render() {
		const errMsg = this.props.getErrorMessage();
		return (
			<div>
				<div className="form-group">
					<label htmlFor={this.props.name}>{errMsg ? <span className="error">{errMsg}</span> : this.props.label}</label>
					<input onChange={this.changeValue} type={this.props.type} className="form-control"  id={this.props.name} value={this.props.getValue() || ""}/>
				</div>
			</div>
		);
	}
}

export default withFormsy(Inputs)