import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: [],
    operators: [],
    selecterOperator: '',
    storeValue: '',
  }
  
  callOperator() {
    console.log('call operation')
  }
  
  setOperator() {
    console.log('set operation')
  }
  
  updateDisplay() {
    console.log('update display')
  }
  
  render() {
    return(
      <div className="calc-container">Calculator</div>
    )
  }
}

export default Calculator;