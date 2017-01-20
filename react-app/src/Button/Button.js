import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		return (<button className={'btn ' + this.props.color}>{this.props.text}</button>);
	}
}

export default Button;