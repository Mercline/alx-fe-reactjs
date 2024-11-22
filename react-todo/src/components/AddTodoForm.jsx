// src/AddTodoForm.js
import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Add new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
