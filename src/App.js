import React, { useState } from "react";

import "./App.css";

//components
import SearchBar from "./components/searchbar";
import Results from "./components/results";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <SearchBar changeHandler={setQuery} />
      <p>QUERY: {query}</p>
      <Results query={query} />
    </div>
  );
}

export default App;
