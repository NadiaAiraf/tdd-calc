import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe ('Calculator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });
  
  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  
  it('should contain a display component', () => {
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue}/>,
      <Keypad
        callOperator={ wrapper.instance().state.callOperator }
        numbers={ wrapper.instance().state.numbers }
        operators={ wrapper.instance().state.operators }
        setOperator={ wrapper.instance().state.setOperator }
        updateDisplay={ wrapper.instance().state.updateDisplay }
      />
    ])).toEqual(true)
  })
});