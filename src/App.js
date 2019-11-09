import React from "react";

import "./App.css";

//components
import SearchBar from "./components/Searchbar/Searchbar";
import Results from "./components/Results/Results";
import Modal from "./components/UI/Modal/Modal";

function App(props) {
  return (
    <div className="App">
      <Modal />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
