import React, {Component} from 'react';
import Tag from '../Tag/Tag';

class ItemSelector extends Component {
	constructor(props) {
		super(props);

		this.state = {items: []};
		
		fetch('http://localhost:8000/sabrage/items/', {credentials: 'include'})
			.then((response) => {
				if (response.ok) {
						response.json().then((json) => {
						this.setState({items: json.items})
					});
				} else {
					console.error(response)
				}
			});
	}
	
	render() {
		const tags = this.state.items.map((item) => {
			return <Tag key={item} text={item} color="red" clickHandler={this.props.handleItemClick} selected={this.props.selectedItem === item} />
		});
		return (<div>{tags}</div>);
	}
}

export default ItemSelector;