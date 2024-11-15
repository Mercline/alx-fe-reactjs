import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust the path if necessary

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const favorites = useRecipeStore((state) => state.favorites);

  // Generate recommendations whenever favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      useRecipeStore.getState().generateRecommendations();
    }
  }, [favorites]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
