// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import AddTodoForm from '../AddTodoForm';

describe('TodoList Component', () => {
  test('renders TodoList and displays demo todos', () => {
    render(<TodoList />);

    // Check if the Todo List is rendered
    expect(screen.getByRole('list')).toBeInTheDocument();

    // Check if the initial demo todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('can add new todo', () => {
    render(<TodoList />);

    // Simulate adding a new todo using the form
    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(screen.getByRole('form'));

    // Verify if new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);

    // Find the todo item
    const todo = screen.getByText('Learn React');

    // Click to toggle the todo
    fireEvent.click(todo);

    // Verify if the todo gets a line-through when clicked
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('can delete todo', () => {
    render(<TodoList />);

    // Find the delete button for the first todo
    const deleteButton = screen.getByText('Delete');

    // Click to delete the todo
    fireEvent.click(deleteButton);

    // Verify if the todo is deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
