import { useContext, useEffect } from 'react';
import { HogContext } from '../context/HogContext';

const useFilterSort = () => {
  const { hogs, setFilteredHogs, hiddenHogs } = useContext(HogContext);

  const filterByGreased = (isGreased) => {
    setFilteredHogs(hogs.filter(hog => (isGreased ? hog.greased : true) && !hiddenHogs.includes(hog.name)));
  };

  const sortHogs = (sortBy) => {
    setFilteredHogs(prevHogs => [...prevHogs].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.weight - b.weight;
    }));
  };

  return { filterByGreased, sortHogs };
};

export default useFilterSort;
