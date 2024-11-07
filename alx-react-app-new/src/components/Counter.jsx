// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
    // Initialize the count state to 0 using useState hook
    const [count, setCount] = useState(0);

    // Increment function to increase count by 1
    const increment = () => setCount(count + 1);

    // Decrement function to decrease count by 1
    const decrement = () => setCount(count - 1);

    // Reset function to set count back to 0
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React Counter Application</h1>
            {/* Display current count */}
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
            <div>
                {/* Button for increment */}
                <button onClick={increment} style={buttonStyle}>Increment</button>
                {/* Button for decrement */}
                <button onClick={decrement} style={buttonStyle}>Decrement</button>
                {/* Button for reset */}
                <button onClick={reset} style={buttonStyle}>Reset</button>
            </div>
        </div>
    );
}

// Button style for a better UI appearance
const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
};

export default Counter;
