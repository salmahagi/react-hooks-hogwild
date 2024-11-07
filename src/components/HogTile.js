import React, { useContext } from 'react';
import { HogContext } from '../context/HogContext';

const HogTile = ({ hog }) => {
  const { hiddenHogs, toggleHideHog } = useContext(HogContext);

  const handleToggleHogVisibility = () => {
    toggleHideHog(hog.name);
  };

  // Check if this hog is hidden
  const isHidden = hiddenHogs.includes(hog.name);

  // Render either the Show or Hide button based on hog visibility
  return (
    <div className="card ui eight wide column">
      {!isHidden ? (
        <>
          <div className="image">
            <img src={hog.image} alt={hog.name} />
          </div>
          <div className="content">
            <h3>{hog.name}</h3>
          </div>
          <div className="extra content">
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight}</p>
            <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
            <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
          </div>
        </>
      ) : (
        <div className="content">
          <h3>{hog.name} (Hidden)</h3>
        </div>
      )}
      
      <button className="ui button" onClick={handleToggleHogVisibility}>
        {isHidden ? 'Show Hog' : 'Hide Hog'}
      </button>
    </div>
  );
};

export default HogTile;
