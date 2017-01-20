import React, { Component } from 'react';
import './App.css';
import Adder from '../Adder/Adder';
import ItemsList from '../ItemsList/ItemsList';

class App extends Component {
  render() {
    const items = [
      {
        name: 'Oskar',
        datetime: '2017-01-01T01:02:00+02:00',
        item: 'Patron'
      },
      {
        name: 'Pietu',
        datetime: '2017-01-01T03:02:00+02:00',
        item: 'Patron'
      },
      {
        name: 'Peter',
        datetime: '2017-01-02T01:02:00+02:00',
        item: 'Patron'
      },
    ];
    return (
      <div className="App">
        <h1>Sabrage</h1>
        <Adder />
        <ItemsList items={items}/>
      </div>
    );
  }
}

export default App;
