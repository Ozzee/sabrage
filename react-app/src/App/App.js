import React, { Component } from 'react';
import './App.css';
import Adder from '../Adder/Adder';
import ItemsList from '../ItemsList/ItemsList';

class App extends Component {
	constructor(props) {
		super(props);
		this.updateTable = this.updateTable.bind(this);

		this.state = {entries: []};

		this.updateTable();		
	}

	updateTable() {
		fetch('http://localhost:8000/sabrage/entries/', {credentials: 'include'})
			.then((response) => {
				if (response.ok) {
						response.json().then((json) => {
						this.setState({entries: json.entries})
					});
				} else {
					console.error(response)
				}
			});
	}

  render() {
    return (
      <div className="App">
        <h1>Sabrage</h1>
        <Adder updateTable={this.updateTable} />
        <ItemsList entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
