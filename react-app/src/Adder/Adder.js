import React, { Component } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import ItemSelector from '../ItemSelector/ItemSelector';
import UserSelector from '../UserSelector/UserSelector';
import './Adder.css';

class Adder extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.selectUser = this.selectUser.bind(this);
		this.addItem = this.addItem.bind(this);
		this.handleItemSelection = this.handleItemSelection.bind(this);
		this.closeDropdown = this.closeDropdown.bind(this);

		this.state = {
			inputActive: false,
			inputValue: '',
			suggestedUsers: [],
			selectedItem: undefined,
		};
	}

	componentDidMount() {
		document.getElementById('nameInput').focus();
	}

	addItem(e) {
		const request = {
			method: 'POST',
			credentials: 'include',
			body: '{"user": "' + this.state.inputValue + '", "item": "' + this.state.selectedItem + '"}'
		};
		if (this.validateForm()) {
			fetch('http://localhost:8000/sabrage/entries/', request).then((response) => {
					this.reset();
					this.props.updateTable();
				});
		}
	}

	handleInputChange(e) {
		fetch('http://localhost:8000/sabrage/users/?q=' + e.target.value, {credentials: 'include'})
			.then((response) => {
				response.json().then((json) => this.setState({suggestedUsers: json.users}));
			});
		this.setState({inputValue: e.target.value});
	}

	handleInputFocus(e) {
		this.setState({inputActive: true});
	}

	selectUser(user) {
		this.setState({inputValue: user});
	}

	closeDropdown() {
		this.setState({inputActive: false});
	}

	handleItemSelection(item) {
		if (item === this.state.selectedItem) {
			this.setState({selectedItem: undefined});
		} else {
			this.setState({selectedItem: item});
		}
	}

	validateForm() {
		return this.state.inputValue.length > 0 && this.state.selectedItem !== undefined;
	}

	reset() {
		this.setState({
			inputActive: true,
			inputValue: '',
			suggestedUsers: [],
			selectedItem: undefined
		});
		document.getElementById('nameInput').focus();
	}

	render() {
		return (
			<Container>
				<div className="Adder row">
					<UserSelector value={this.state.inputValue} users={this.state.suggestedUsers} active={this.state.inputActive} 
						inputHandler={this.handleInputChange} focusHandler={this.handleInputFocus} blurHandler={this.closeDropdown} selectUser={this.selectUser} />
				</div>
				<div className="row">
					<ItemSelector handleItemClick={this.handleItemSelection} selectedItem={this.state.selectedItem} />
				</div>
				<div className="row right">
					<Button color="green" text="Ok" enabled={this.validateForm()} handleClick={this.addItem} />
				</div>
			</Container>);
	}
}

export default Adder;