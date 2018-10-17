import React from 'react';
import { List } from "antd";
import "antd/dist/antd.css";
import "../App.css";

/* Notes on this compoenent;

 Ant Design’s <List /> component. It takes in an array as its dataSource prop 
 and renders it according to whatever function is passed to its renderItem prop.


*/

const RenderList = ({passNewState}) => {
  return (
    <List
          locale={{ emptyText: "No todo items" }}
          dataSource={passNewState}
          renderItem={item => (
            <List.Item>{item.content}</List.Item>
          )}
        />
      ) 
}


export default RenderList;