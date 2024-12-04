import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-500 text-4xl font-bold text-center mt-4">Vite + React</h1>
      <div className="card flex flex-col items-center mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all"
        >
          count is {count}
        </button>
        <p className="mt-4 text-center text-gray-600">
          Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center text-gray-500 mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
