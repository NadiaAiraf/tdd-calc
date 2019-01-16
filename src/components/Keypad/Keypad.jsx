import React from 'react';
import './Keypad.css'
import Key from '../Key/Key';

const Keypad = ({ 
    callOperator,
    numbers, 
    operators,
    setOperator,
    updateDisplay,
}) => {
    const numberKeys = numbers.map(num => (
        <Key
            key={num}
            keyAction={updateDisplay}
            keyType="number-key"
            keyValue={num}
        />)
    );
    
    const operatorKeys = operators.map(operator => (
        <Key
            key={operator}
            keyAction={setOperator}
            keyType="operator-key"
            keyValue={operator}
        />)
    );
    
    return (
        <div className="keypad-container">;
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className="operators-container">
                {operatorKeys}
            </div>
            <div className="submit-container">
                <Key
                    keyAction={callOperator}
                    keyType="submit-key"
                    keyValue="="
                />
            </div>
        </div>
    )
}

export default Keypad;