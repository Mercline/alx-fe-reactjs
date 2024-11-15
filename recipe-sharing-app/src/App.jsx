import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';

// RecipeList Component
const RecipeList = () => {
  // Get the filtered recipes from the Zustand store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  useEffect(() => {
    // If no search term is set, the filteredRecipes will be the same as recipes
    if (filteredRecipes.length === 0 && recipes.length > 0) {
      useRecipeStore.getState().filterRecipes(); // Trigger filtering if needed
    }
  }, [recipes, filteredRecipes]);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar /> {/* Search bar for filtering recipes */}
      <RecipeList /> {/* Display the filtered recipe list */}
    </div>
  );
};

export default App;
