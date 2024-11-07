import { useState, useEffect } from 'react';

const useFilterSort = (recipes, selectedDifficulty, sortBy = 'name') => {
  const [filteredSortedRecipes, setFilteredSortedRecipes] = useState([]);

  useEffect(() => {
    // Filter recipes by difficulty if a selectedDifficulty is provided
    let updatedRecipes = selectedDifficulty
      ? recipes.filter(recipe => recipe.difficulty === selectedDifficulty)
      : recipes;

    // Sort recipes based on the 'sortBy' parameter
    updatedRecipes = [...updatedRecipes].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });

    setFilteredSortedRecipes(updatedRecipes);
  }, [recipes, selectedDifficulty, sortBy]);

  return filteredSortedRecipes;
};

export default useFilterSort;
