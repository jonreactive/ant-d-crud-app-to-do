import React from 'react';
import { Input, List, Icon, DatePicker } from "antd";
import "antd/dist/antd.css";
import '../App.css';


const InputField = (props) => {
  
  return (
      <div>
        <h1>Insert a task below</h1>
        
        <Input 
          onPressEnter={props.handlePressEnter} 
          placeholder="What needs to be done?" />
      </div>
  )
}

export default InputField;