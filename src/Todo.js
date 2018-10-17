import React, { Component } from 'react';
import { Input, List, Icon, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import InputField from "./components/InputField"
import RenderList from "./components/RenderList"


class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    todos: []
    }
    
  this.handlePressEnter = this.handlePressEnter.bind(this)

  }
  
  
  handlePressEnter = e => {
      // Create a todo object containing its index and content
      const todo = {
        index: this.state.todos.length,
        content: e.target.value
      };

      // Add the todo to our array
      const newTodos = this.state.todos.concat(todo);

      this.setState({
        todos: newTodos
      });

      // Clear input
      e.target.value = "";
    };
  

  render() {
    return (
    <div className="todoContainer">
      <InputField handlePressEnter={this.handlePressEnter} />
      <RenderList passNewState = {this.state.todos}/>
    </div>  
      
    )
  }
}
export default Todo