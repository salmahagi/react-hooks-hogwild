import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";
import HogTile from "./HogTile";
import { HogProvider } from '../context/HogContext';
import '../index.css';

function App() {
	
	return (
		<HogProvider>
      <div className="ui container">
        <div className="ui grid">
          <HogTile />
		  <FilterSort/>
		  <HogForm/>
		  <HogList/>
		  <Nav/>
		  <App/>
        </div>
      </div>
    </HogProvider>
		  
	);
}

export default App;
