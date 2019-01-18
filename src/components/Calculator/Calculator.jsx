import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      numbers: ['1','2','3','4','5','6','7','8','9','0','.','ce'],
      operators: ['/','*','-','+'],
      selecterOperator: '',
      storeValue: '',
    }
  }
  
  callOperator = () => {
    let displayString = parseInt(this.state.displayValue,10)
    let oldValue = parseInt(this.state.storeValue,10)
    
    switch (this.state.selecterOperator) {
      case '+':
        displayString = oldValue + displayString;
        break;
      case '-':
        displayString = oldValue - displayString;
        break;
      case '*':
        displayString = oldValue * displayString;
        break;
      case '/':
        displayString = oldValue / displayString;
        break;
      default:
        displayString = 0;
    }
    
    this.setState({ displayValue: displayString.toString() })
  }
  
  setOperator = (value) => {
    this.setState({
      selecterOperator: value,
      storeValue: this.state.displayValue,
      displayValue: '0',
    })
  }
  
  updateDisplay = (value) => {
    let displayString = this.state.displayValue;

    if (value === '.' && displayString.includes('.')) value = '';  
    
    if (value === 'ce') {
      this.setState({
        storeValue: '',
        displayValue: '0',
        selecterOperator: '',
      })
    } else {
      displayString === '0' ? displayString = value : displayString += value
      this.setState({ displayValue: displayString })
    }
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