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

describe('updateDisplay', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />)
  })
  
  it('updates the display value', () => {
    wrapper.instance().updateDisplay('5')
    expect(wrapper.state('displayValue')).toEqual('5');
  })
  
  it('concatenates the displayValue', () => {
    wrapper.instance().updateDisplay('5')
    wrapper.instance().updateDisplay('0')
    expect(wrapper.state('displayValue')).toEqual('50')
  })
  
  it('removes leading 0 from displayValue', () => {
    wrapper.instance().updateDisplay('0')
    wrapper.instance().updateDisplay('5')
    expect(wrapper.state('displayValue')).toEqual('5')
  })
  
  it('prevent multiple instances of .', () => {
    wrapper.instance().updateDisplay('.')
    wrapper.instance().updateDisplay('.')
    expect(wrapper.state('displayValue')).toEqual('.')
  })
  
  it('ce clears the displayValue, setOperator & storedValue', () => {
    wrapper.instance().updateDisplay('6')
    wrapper.instance().updateDisplay('ce')
    expect(wrapper.state('displayValue')).toEqual('0')
    expect(wrapper.state('selecterOperator')).toEqual('')
    expect(wrapper.state('storeValue')).toEqual('')
  })
})

describe('setOperator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });
  
  it('updates the selecterOperator value', () => {
    wrapper.instance().setOperator('+')
    expect(wrapper.state('selecterOperator')).toEqual('+');
  });
  
  it('updates the storedValue to be the current displayValue', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('storeValue')).toEqual('5');
  })
  
  it('resets the displayValue to 0', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('displayValue')).toEqual('0');
  })
});