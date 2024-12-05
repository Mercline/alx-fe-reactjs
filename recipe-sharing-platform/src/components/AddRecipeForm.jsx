import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to hold form values
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};  // Object to hold errors

    // Validate Title
    if (!title.trim()) {
      newErrors.title = 'Title is required.';
    }

    // Validate Ingredients
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsList = ingredients
        .split('\n')
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient.length > 0);

      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients.';
      }
    }

    // Validate Steps
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    // If there are errors, set them in state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // If no errors, return true
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
      setErrors({});  // Reset errors after successful submission
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Add a New Recipe</h2>

      {/* Display error messages if validation fails */}
      <div className="mb-4">
        {errors.title && <p className="text-red-600">{errors.title}</p>}
        {errors.ingredients && <p className="text-red-600">{errors.ingredients}</p>}
        {errors.steps && <p className="text-red-600">{errors.steps}</p>}
      </div>

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
