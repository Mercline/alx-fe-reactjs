// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    // Check if the initial todos are rendered
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
  });

  test('can add a new todo using AddTodoForm', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    // Simulate user typing and submitting the form
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Simulate clicking on the todo item to toggle completion
    fireEvent.click(todoItem);
    
    // Check if the todo is marked as completed (text-decoration: line-through)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText('Delete')[0];
    
    // Simulate clicking the delete button for the first todo
    fireEvent.click(deleteButton);

    // Check if the todo was removed from the list
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
