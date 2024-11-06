import React from 'react';
import useFilterSort from '../hooks/useFilterSort.jsX';

function FilterSort() {
  const { filterByGreased, sortHogs } = useFilterSort();

  return (
    <div className="filter-sort-controls">
      <label>
        <input type="checkbox" onChange={(e) => filterByGreased(e.target.checked)} />
        Show Greased Only
      </label>
      <select onChange={(e) => sortHogs(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default FilterSort;
