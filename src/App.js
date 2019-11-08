import React from "react";

import "./App.css";

//components
import SearchBar from "./components/Searchbar";
import Results from "./components/Results";
import Modal from "./components/UI/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
