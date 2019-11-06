import React, { useState, useEffect } from "react";
import axios from "axios";

function Results(props) {
  const [results, setResults] = useState();

  useEffect(() => {
    async function fetchPokemon() {
      const results = await axios.get(
        `https://api.pokemontcg.io/v1/cards?name=${props.query}`
      );
      let data = results.data;
      setResults(data);
    }
    fetchPokemon();
  }, [props.query]);

  let list = null;
  if (results) {
    list = results.cards.map(el => {
      // component here
      return <li>{el.name}</li>;
    });
  }

  return <ul>{list}</ul>;
}

export default Results;
