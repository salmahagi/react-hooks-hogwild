import { useState, useEffect } from 'react';

const useFilterSort = (hogs, selectedFilter = null, sortBy = 'name', hiddenHogs = []) => {
  const [filteredSortedHogs, setFilteredSortedHogs] = useState([]);

  useEffect(() => {
    // Filter out hidden hogs and apply selected filter
    let updatedHogs = hogs.filter(hog => !hiddenHogs.includes(hog.name));
    
    if (selectedFilter) {
      updatedHogs = updatedHogs.filter(hog => hog[selectedFilter.key] === selectedFilter.value);
    }

    // Sort hogs based on the 'sortBy' parameter
    updatedHogs = [...updatedHogs].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });

    setFilteredSortedHogs(updatedHogs);
  }, [hogs, selectedFilter, sortBy, hiddenHogs]);

  return filteredSortedHogs;
};

export default useFilterSort;
