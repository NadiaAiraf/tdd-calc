import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

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
  
  callOperator = () => {
    console.log('call operation')
  }
  
  setOperator = () => {
    console.log('set operation')
  }
  
  updateDisplay = () => {
    console.log('update display')
  }
  
  render() {
    return(
      <div className="calc-container">
        <Display displayValue={ this.state.displayValue }/>
        <Keypad
          callOperator={this.callOperator}
          numbers={this.state.numbers}
          operators={this.state.operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    )
  }
}

export default Calculator;