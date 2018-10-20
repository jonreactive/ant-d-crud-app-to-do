import React, { Component } from 'react';
import { Input, List, Icon, DatePicker } from "antd";


class TodoItemRemove extends Component {
  
  remove = ({removeTodo}) => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.todo.index);
  };

  render() {
    return (
      <List.Item
        actions={[
          <Icon
            type="close-circle"
            theme="filled"
            onClick={this.remove}
          />
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}

export default TodoItemRemove;