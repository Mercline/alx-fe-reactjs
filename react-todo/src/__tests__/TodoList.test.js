import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Correct import path based on where your component is

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    // Render the component
    render(<TodoList />);

    // Test that the component renders properly
    expect(screen.getByText('Your Todo List Title')).toBeInTheDocument();  // Replace with actual text
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    // Simulate user input and adding a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' }
    });
    fireEvent.click(screen.getByText('Add'));

    // Assert the new todo is displayed
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    // Simulate deleting a todo
    fireEvent.click(screen.getByText('Delete'));

    // Assert the todo was deleted
    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);

    // Simulate clicking to toggle completion
    fireEvent.click(screen.getByText('Complete Todo'));

    // Assert the todo's completion status has toggled
    expect(screen.getByText('Todo completed')).toBeInTheDocument();
  });
});
