// HogList.js
import React, { useContext } from 'react';
import { HogContext } from '../context/HogContext';
import HogTile from './HogTile';

function HogList() {
  const { filteredHogs, hiddenHogs } = useContext(HogContext);

  return (
    <div className="hog-list ui grid">
      {filteredHogs
        .filter(hog => !hiddenHogs.includes(hog.name))
        .map(hog => (
          <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
