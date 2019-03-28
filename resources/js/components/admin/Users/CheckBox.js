import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';

class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.changeValue = this.changeValue.bind(this);
	}
	changeValue (e) {
		this.props.setValue(e.currentTarget.value);
	}

	render() {
		return (
			<label htmlFor={this.props.meta}>
				<input onChange={this.changeValue} formNoValidate type="radio" id={this.props.meta} name={this.props.name} defaultValue={this.props.meta} checked={this.props.check}/> {this.props.meta}
			</label>
		);
	}

}

export default withFormsy(CheckBox);