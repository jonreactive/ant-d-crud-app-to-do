import React from 'react';
import { List } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import TodoItemRemove from './TodoItemRemove';

/* Notes on this compoenent;

 Ant Design’s <List /> component. It takes in an array as its dataSource prop 
 and renders it according to whatever function is passed to its renderItem prop.


*/

const RenderList = ({passNewState, removeTodo}) => {
  return (
    <List
          locale={{ emptyText: "No todo items" }}
          dataSource={passNewState}
          renderItem={item => (
            <TodoItemRemove
              todo={item}
              removeTodo={removeTodo}
            />
          )}
        />
      ) 
}


export default RenderList;