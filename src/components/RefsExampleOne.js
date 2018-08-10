import React, { Component } from 'react';

class RefsExampleOne extends Component {
  
  showValue = () => {
    alert(`Input contains: ${this.input.value}`);
  }
  
  render() {
    return (
      <div>
        <input 
          type="text"
          ref={input => this.input = input}
        />
          <button onClick={this.showValue}>
            Alert the value!
          </button>
        <p>Example using ref on an input to extract its value when a btn is clicked</p>    
      </div>
    )
  }
}

export default RefsExampleOne;