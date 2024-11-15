import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />  {/* Add search bar to the UI */}
      <RecipeList />  {/* Display the filtered recipe list */}
    </div>
  );
};

export default App;
