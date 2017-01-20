import React, { Component } from 'react';
import moment from 'moment-timezone';
import './ItemsList.css';
import Container from '../Container/Container';

class ItemsList extends Component {

	constructor(props) {
		super(props);

		this.state = {entries: []};
		
		fetch('entries/', {credentials: 'include'})
			.then((response) => response.json())
			.then((json) => this.setState({entries: json.entries}));
	}

	line(item) {
		const time = moment(item.timestamp);
		return (<tr key={item.timestamp+item.item}>
					<td>{item.user}</td>
					<td>{item.item}</td>
					<td className="time">{time.fromNow()}</td>
				</tr>);
	}

	render() {
		const lines = this.state.entries
			.sort((a, b) => a.timestamp < b.timestamp)
			.map((item) => this.line(item));

		return (
			<Container >
				<table className="ItemsTable">
					<tbody>
						{lines}
					</tbody>
				</table>
			</Container>
			);
	}
}

export default ItemsList;
