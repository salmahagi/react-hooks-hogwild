import React from "react";
import Nav from "./Nav";
import HogList from './HogList';
import FilterSort from './FilterSort';
import HogForm from './HogForm';
import { HogProvider } from './context/HogContext';
import './index.css';

function App() {
	
	return (
	<HogProvider>
		<porkers_data>
		<div className="App">
			<Nav />
			<FilterSort />
        <HogForm />
        <HogList />
		</div>
		</porkers_data>
    </HogProvider>
	);
}

export default App;
