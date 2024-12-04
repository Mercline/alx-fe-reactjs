import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      {/* Logo Section */}
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-blue-500 text-4xl font-bold text-center mb-4">
        Vite + React
      </h1>

      {/* Counter Section */}
      <div className="card bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Count is {count}
        </button>
        <p className="text-gray-400 mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Documentation Links */}
      <p className="mt-6 text-gray-300">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
