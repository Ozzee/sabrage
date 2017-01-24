import React, { Component } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import ItemSelector from '../ItemSelector/ItemSelector';
import UserSelector from '../UserSelector/UserSelector';
import './Adder.css';

class Adder extends Component {
	render() {
		return (
			<Container>
				<div className="Adder row">
					<UserSelector />
				</div>
				<div className="row">
					<ItemSelector />
				</div>
				<div className="row right">
					<Button color="green" text="Ok" />
				</div>
			</Container>);
	}
}

export default Adder;