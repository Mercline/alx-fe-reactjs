import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import recipeData from '../data.json'; // Import mock recipe data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the 'id' from the URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data based on the 'id' from the URL
    const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]); // Re-fetch data whenever the id changes

  if (!recipe) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg text-gray-700">
        Loading...
      </div>
    ); // Show a loading message if recipe is not found yet
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-blue-600 font-semibold mb-6 hover:text-blue-800"
        >
          ← Back to Home
        </Link>

        {/* Recipe Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          {recipe.title}
        </h1>

        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-6 sm:h-80 md:h-96 lg:h-96 xl:h-96"
        />

        {/* Recipe Summary */}
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          {recipe.summary}
        </p>

        {/* Ingredients Card */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 tracking-tight leading-tight">
            Ingredients:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg sm:text-xl text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg sm:text-xl">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Cooking Instructions Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 tracking-tight leading-tight">
            Instructions:
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-lg sm:text-xl text-gray-700">
            {recipe.instructions.split('\n').map((step, index) => (
              <li key={index} className="text-lg sm:text-xl leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
