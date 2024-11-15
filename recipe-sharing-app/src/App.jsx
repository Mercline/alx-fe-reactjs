import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';  // Import the AddRecipeForm
import RecipeDetail from './components/RecipeDetail';    // Import the RecipeDetail

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* Search bar for filtering recipes */}

        <Routes>
          {/* Route to show all recipes */}
          <Route path="/" element={<RecipeList />} />
          
          {/* Route to show the form to add a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />
          
          {/* Route to show individual recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
