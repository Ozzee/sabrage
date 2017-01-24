import React, { Component } from 'react';
import './UserSelector.css';


class UserSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			value: '',
			suggestedUsers: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.select = this.select.bind(this);
		this.selectUser = this.selectUser.bind(this);
	}

	componentDidMount() {
		document.getElementById('nameInput').focus();
	}

	handleChange(e) {
		fetch('http://localhost:8000/sabrage/users/?q=' + this.state.value, {credentials: 'include'})
			.then((response) => {
				response.json().then((json) => this.setState({suggestedUsers: json.users}));
			});
		this.setState({value: e.target.value});
	}

	select(e) {
		this.setState({selected: true});
	}

	selectUser(user) {
		this.setState({selected: false, value: user});
	}

	render() {
		const selected = this.state.selected ? 'selected' : '';
		const suggestions = this.state.suggestedUsers.map((user) => <li key={user} onClick={() => this.selectUser(user)}>{user}</li>);
		return (
			<div className="inputContainer">
				<input id="nameInput" onFocus={this.select} type="text" value={this.state.value} onChange={this.handleChange} />
				<ul className={'userSuggestions ' + selected}>
					<li onClick={() => this.selectUser(this.state.value)}>"{this.state.value}"</li>
					{suggestions}
				</ul>
			</div>
			);
	}
}

export default UserSelector;