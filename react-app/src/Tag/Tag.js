import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {

	constructor(props) {
		super(props);
		this.state = {selected: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState((prevState) => ({selected: !prevState.selected}));
	}

	render() {
		const selected = this.state.selected ? 'selected' : '';
		return (<button className={this.props.color + ' tag ' + selected} onClick={this.handleClick}>{this.props.text}</button>);
	}
}

export default Tag;