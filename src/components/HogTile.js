import React, { useState, useContext } from 'react';
import { HogContext } from '../context/HogContext';

function HogTile({ hog }) {
  const { toggleHideHog } = useContext(HogContext);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div className="ui eight wide column card"
      layout
      onClick={() => setShowDetails(!showDetails)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <div className="header">{hog.name}</div>
        {showDetails && (
          <motion.div className="description" layout>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal: {hog["highest medal achieved"]}</p>
            <button onClick={(e) => { e.stopPropagation(); toggleHideHog(hog.name); }}>
              {hiddenHogs.includes(hog.name) ? "Unhide" : "Hide"}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default HogTile;
