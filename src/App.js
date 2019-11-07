import React from "react";

import "./App.css";

//components
import SearchBar from "./components/searchbar";
import Results from "./components/results";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
