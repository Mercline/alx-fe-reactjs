import React, { useState } from 'react';
import './App.css';
import UserSearch from './components/UserSearch'; // Import the UserSearch component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <UserSearch /> {/* Use the UserSearch component */}
      </main>
    </div>
  );
}

export default App;
