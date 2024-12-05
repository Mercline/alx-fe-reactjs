import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Original content (Vite + React logos, counter) */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="mb-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl text-blue-500 font-bold mb-4">Vite + React</h1>

        <div className="card mb-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        {/* New content (Welcome message) */}
        <div className="mt-8">
          <h1 className="text-4xl text-blue-500 font-bold">Welcome to Recipe Sharing Platform!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
