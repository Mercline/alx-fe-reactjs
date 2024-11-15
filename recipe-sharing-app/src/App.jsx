import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // Make sure this component exists
import AddRecipeForm from './components/AddRecipeForm'; // Add this if you have a form for adding recipes

const App = () => {
  return (
    <Router> {/* Wrap your app in Router */}
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes> {/* Define the routes for your app */}
          <Route path="/" element={<RecipeList />} /> {/* Home route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for recipe details */}
          <Route path="/add" element={<AddRecipeForm />} /> {/* Route for adding new recipes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
