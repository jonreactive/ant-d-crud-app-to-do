import React, { Component } from 'react';
import { Input } from "antd";
import '../App.css';

class Todo extends Component {
  
  render() {
    return (
      <div className="todoContainer">
      <h1>TODO App</h1>
        <Input
          placeholder="What needs to be done?"
        />
      </div>
    )
  }
}

export default Todo