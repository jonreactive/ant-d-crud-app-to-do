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
  this.removeTodo = this.removeTodo.bind(this)

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
    
    
  removeTodo = index => {
   let newTodos = [...this.state.todos];

   // Remove element
   newTodos.splice(index, 1);

   // Decrement greater indexes
   for (let i = index; i < newTodos.length; i++) {
     newTodos[i].index -= 1;
   }

   // Update state
   this.setState({
     todos: newTodos
   });
 };
    
    
  render() {
    return (
    <div className="todoContainer">
      <InputField handlePressEnter={this.handlePressEnter} />
      <RenderList 
        passNewState = {this.state.todos}
        removeTodo = {this.removeTodo}
        />
    </div>  
      
    )
  }
}
export default Todo