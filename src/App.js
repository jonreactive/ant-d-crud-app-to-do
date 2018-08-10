import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledInput from './components/ControlledInput';
import RefsExampleOne from './components/RefsExampleOne';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ControlledInput />
        <hr />
        <RefsExampleOne />
      </div>
    );
  }
}

export default App;
