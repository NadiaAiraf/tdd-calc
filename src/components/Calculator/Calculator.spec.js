import React from 'react';
import { mount, shallow } from 'enzyme';
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
  
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});

describe('mounted Calculator', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Calculator />);
  })
  
  it('calls updateDisplay when a number key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(),'updateDisplay');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.number-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
  
  it('calls setOperator when an operator key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(),'setOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.operator-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
  
  it('calls callOperator when submit key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(),'callOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.submit-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
})