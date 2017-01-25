import React, { Component } from 'react';
import './UserSelector.css';


class UserSelector extends Component {
	render() {
		const selected = this.props.active ? 'selected' : '';
		const suggestions = this.props.users.map((user) => <li key={user} onClick={() => this.props.selectUser(user)}>{user}</li>);
		return (
			<div className="inputContainer">
				<input id="nameInput" onFocus={this.props.focusHandler} onBlur={(e) => setTimeout(this.props.blurHandler, 100)} type="text" value={this.props.value} onChange={this.props.inputHandler} />
				<ul className={'userSuggestions ' + selected}>
					<li className="typed" onMouseDown={() => this.props.selectUser(this.props.value)}>{this.props.value}</li>
					{suggestions}
				</ul>
			</div>
			);
	}
}

export default UserSelector;