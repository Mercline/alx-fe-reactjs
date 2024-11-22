// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
