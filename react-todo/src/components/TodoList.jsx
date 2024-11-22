// src/components/TodoList.jsx
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Testing', completed: false },
  ]);

  const handleAddTodo = (newTodoText) => {
    const newTodoItem = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteTodo(todo.id); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
