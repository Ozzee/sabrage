import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		const enabled = this.props.enabled ? 'enabled' : '';
		return (<button className={'btn ' + this.props.color + ' ' + enabled} onClick={this.props.handleClick}>{this.props.text}</button>);
	}
}

export default Button;