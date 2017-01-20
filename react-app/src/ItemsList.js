import React, { Component } from 'react';
import moment from 'moment';
import './ItemsList.css';
import Container from './Container';

class ItemsList extends Component {

	line(item) {
		const time = moment(item.datetime).fromNow();
		return (<tr key={item.datetime+item.item}>
					<td>{item.name}</td>
					<td>{item.item}</td>
					<td className="time">{time}</td>
				</tr>);
	}

	render() {
		const lines = this.props.items.map((item) => this.line(item));
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
