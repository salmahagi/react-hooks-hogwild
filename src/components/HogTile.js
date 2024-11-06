import React, { useState, useContext } from 'react';
import { HogContext } from '../context/HogContext';

function HogTile({ hog }) {
  const { toggleHideHog } = useContext(HogContext);
  const [showDetails, setShowDetails] = useState(false);

  const handleHideHog = () => {
    toggleHogVisibility(hog.name);
  };

  return (
    <div className="card ui eight wide column">
      <div className="image" onClick={handleTileClick}>
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3>{hog.name}</h3>
      </div>

      {isDetailsVisible && (
        <div className="extra content">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
          <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
          <button className="ui button" onClick={handleHideHog}>Hide Hog</button>
        </div>
      )}
    </div>
  );
}
      


export default HogTile;
