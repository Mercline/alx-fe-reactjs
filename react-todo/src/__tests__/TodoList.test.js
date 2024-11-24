// TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'; // Ensure the correct import path

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  
  // Check if initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  
  // Add a new todo
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  
  // Check if the new todo is in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  
  // Check if the todo is crossed out after being clicked
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  
  // Check if the todo is removed
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
