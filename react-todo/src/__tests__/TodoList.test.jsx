// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Adjust path if necessary

// Test: Initial render of TodoList with initial todos
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

// Test: Adding a new todo
test('allows the user to add a todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');  // Adjust placeholder if necessary
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add'));  // Adjust button text if necessary

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test: Toggling a todo item
test('allows the user to toggle a todo between completed and not completed', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  
  // Initially, it should not be completed
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  
  // Toggle it
  fireEvent.click(todoItem);
  
  // Now, it should have a line-through
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

// Test: Deleting a todo item
test('allows the user to delete a todo', () => {
  render(<TodoList />);
  
  // Assuming the delete button is visible for the first todo
  const deleteButton = screen.getByText('Delete');
  
  // Simulate clicking the delete button
  fireEvent.click(deleteButton);
  
  // Verify the todo is no longer in the document
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
