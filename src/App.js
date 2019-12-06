import React from "react";

import "./App.css";

//components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Modal from "./components/UI/Modal/Modal";

function App(props) {
  return (
    <div className="App">
      <Modal />
      <Search />
      <Results />
    </div>
  );
}

export default App;
