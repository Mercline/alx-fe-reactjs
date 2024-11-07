// src/App.jsx
import React from 'react';
import Counter from './components/Counter';  // Import the Counter component

function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
            <h1>React Counter Application</h1>
            {/* Include the Counter component */}
            <Counter />
        </div>
    );
}

export default App;
