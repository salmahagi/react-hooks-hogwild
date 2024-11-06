import React, { createContext, useState, useEffect } from 'react';
import porkersData from '../data/porkers_data.jsX';

export const HogContext = createContext();

export const HogProvider = ({ children }) => {
  const [hogs, setHogs] = useState(porkersData);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [hiddenHogs, setHiddenHogs] = useState(() => {
    const storedHidden = localStorage.getItem('hiddenHogs');
    return storedHidden ? JSON.parse(storedHidden) : [];
  });

  useEffect(() => {
    localStorage.setItem('hiddenHogs', JSON.stringify(hiddenHogs));
  }, [hiddenHogs]);

  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
    setFilteredHogs([...filteredHogs, newHog]);
  };

  const toggleHideHog = (name) => {
    setHiddenHogs(prev => prev.includes(name) ? prev.filter(hog => hog !== name) : [...prev, name]);
  };

  return (
    <HogContext.Provider value={{ hogs, setFilteredHogs, filteredHogs, hiddenHogs, addNewHog, toggleHideHog }}>
      {children}
    </HogContext.Provider>
  );
};
