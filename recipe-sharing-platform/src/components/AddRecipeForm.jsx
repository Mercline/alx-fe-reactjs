// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to hold form values
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  // Form validation logic
  const validateForm = () => {
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError('All fields are required.');
      return false;
    }

    const ingredientsList = ingredients
      .split('\n')
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient.length > 0);

    if (ingredientsList.length < 2) {
      setError('Please provide at least 2 ingredients.');
      return false;
    }

    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n').map((item) => item.trim()).filter(Boolean),
        steps: steps.split('\n').map((item) => item.trim()).filter(Boolean),
      };

      console.log('New Recipe Submitted:', newRecipe);

      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Add a New Recipe</h2>

      {/* Display error message if validation fails */}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, one per line"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the preparation steps"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
