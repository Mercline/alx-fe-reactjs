// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  // HomePage component
import RecipeDetail from './components/RecipeDetail';  // RecipeDetail component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route for the Recipe Detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
