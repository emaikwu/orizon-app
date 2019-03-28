import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';

class AddForm extends Component {
	constructor(props) {
		super(props);
		this.changeValue= this.changeValue.bind(this);
	}
	changeValue (e) {
		this.props.setValue(e.currentTarget.value);
	}
	render() {
		const errMsg = this.props.getErrorMessage();
		var className = this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : '';
		return (
			<div className="form-group">
				<span className={className}>
				<label htmlFor="name">{errMsg ? <span className="error">{errMsg}</span> : "Category name"}</label>
				<input onChange={this.changeValue} type="text" className="form-control"  id="name" value={this.props.getValue() || ""}/>
				
				</span>
			</div>
		);
	}
}

export default withFormsy(AddForm);