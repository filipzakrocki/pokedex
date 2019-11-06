import React, { useState } from "react";
import axios from 'axios'

import "./App.css";

//components
import SearchBar from "./components/searchbar";
import Results from "./components/results";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();

  async function fetchPokemon() {
    const results = await axios.get(
      `https://api.pokemontcg.io/v1/cards?name=${query}`
    );
    let data = await results.data.cards;
    setResults(data);
    console.log(data)
  }

  return (
    <div className="App">
      <SearchBar changeHandler={setQuery} searchSubmitted={()=>fetchPokemon()}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
