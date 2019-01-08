import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      numbers: [],
      operators: [],
      selecterOperator: '',
      storeValue: '',
    }
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
      <div className="calc-container">
        <Display displayValue={ this.state.displayValue }/>
      </div>
    )
  }
}

export default Calculator;