import React, { Component } from 'react';
import Container from './Container';
import './Adder.css';

class Adder extends Component {

	componentDidMount() {
		document.getElementById('nameInput').focus();
	}
	
	render() {
		return (
			<Container>
				<div className="Adder">
					<input id="nameInput" type="text" />
				</div>
			</Container>);
	}
}

export default Adder;