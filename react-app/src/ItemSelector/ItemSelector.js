import React, {Component} from 'react';
import Tag from '../Tag/Tag';

class ItemSelector extends Component {
	render() {
		return (<div>
				<Tag text="Patron" color="red" />
				<Tag text="Cigarr" color="red" />
			</div>);
	}
}

export default ItemSelector;