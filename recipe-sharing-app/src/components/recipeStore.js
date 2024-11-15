import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Array to store all recipes
  favorites: [], // List of favorited recipe IDs
  searchTerm: '',  // Search term for filtering
  filteredRecipes: [],  // Store filtered recipes based on search term
  recommendations: [], // List of recommended recipes

  // Actions for managing recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  
  setRecipes: (recipes) => set({ recipes }),

  // Actions for managing favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Actions for search and filtering
  setSearchTerm: (term) => set({ searchTerm: term }),  // Set search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Simple recommendation logic based on favorites
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
