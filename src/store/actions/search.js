import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setSearchQuery = query => {
  return {
    type: actionTypes.SET_SEARCH_QUERY,
    query: query
  };
};

export const setResults = data => {
  console.log(data);
  return {
    type: actionTypes.SET_RESULTS,
    results: data
  };
};

export const fetchStarted = data => {
  return {
    type: actionTypes.FETCH_STARTED
  };
};

export const fetchFinished = data => {
  return {
    type: actionTypes.FETCH_FINISHED
  };
};

export const fetchPokemon = pokemonQuery => {
  return async dispatch => {
    dispatch(fetchStarted());

    //query builder
    let array = pokemonQuery.split(" ").map((string, index) => {
      let modStr = string.replace(">", "=gt").replace("<", "=lt");
      if (index > 0) {
        return `&${modStr}`;
      }
      return `name=${string}`;
    });

    const params = `?${array.join("")}`;

    const query = `https://api.pokemontcg.io/v1/cards` + params;
    console.log(query);
    const results = await axios.get(query);
    const cardsArray = await results.data.cards;
    dispatch(setResults(cardsArray));
    dispatch(fetchFinished());
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};

export const openModal = clickedCardIndex => {
  console.log(clickedCardIndex);
  return {
    type: actionTypes.OPEN_MODAL,
    selectedCard: clickedCardIndex
  };
};
