import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" 
          placeholder="type something"
          value={this.state.text}
          onChange={this.handleChange.bind(this)} />
        <p>What ever you type will display below</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}


export default ControlledInput;