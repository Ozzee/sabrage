import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {
	render() {
		const selected = this.props.selected ? 'selected' : '';
		return (<button className={this.props.color + ' tag ' + selected} onClick={() => this.props.clickHandler(this.props.text)}>{this.props.text}</button>);
	}
}

export default Tag;