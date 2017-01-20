import React, { Component } from 'react';
import './App.css';
import Adder from '../Adder/Adder';
import ItemsList from '../ItemsList/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sabrage</h1>
        <Adder />
        <ItemsList />
      </div>
    );
  }
}

export default App;
