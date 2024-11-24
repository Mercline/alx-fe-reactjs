// src/App.jsx or src/App.js
import React from 'react';
import TodoList from './TodoList';  // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />  {/* Render the TodoList component */}
    </div>
  );
}

export default App;
