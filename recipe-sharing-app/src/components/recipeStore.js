import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',  // Track the search term
  setSearchTerm: (term) => set({ searchTerm: term }),  // Update search term
  filteredRecipes: [],  // Store filtered results
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())  // Optionally filter by description
    )
  })),
}));

export { useRecipeStore };
