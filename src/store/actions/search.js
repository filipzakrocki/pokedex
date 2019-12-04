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

export const setError = error => {
  console.log(error);
  return {
    type: actionTypes.SET_ERROR,
    error: error
  };
};

export const setLoadedImages = () => {
  return {
    type: actionTypes.SET_LOADED_IMAGES
  };
};
export const clearLoadedImages = () => {
  return {
    type: actionTypes.CLEAR_LOADED_IMAGES
  };
};

export const fetchPokemon = pokemonQuery => {
  return async dispatch => {
    dispatch(fetchStarted());
    dispatch(clearLoadedImages());
    //query builder
    let params;
    if (pokemonQuery) {
      let array = pokemonQuery.split(" ").map((string, index) => {
        let modStr = string.replace(">", "=gt").replace("<", "=lt");
        if (index > 0) {
          return `&${modStr}`;
        }
        if (!modStr.includes("=")) {
          return `name=${string}`;
        }
        return modStr;
      });
      params = `?${array.join("")}`;
    }

    const query = `https://api.pokemontcg.io/v1/cards` + params;
    try {
      const results = await axios.get(query);
      const cardsArray = await results.data.cards;
      dispatch(setResults(cardsArray));
      dispatch(fetchFinished());
    } catch (error) {
      dispatch(setError(error));
      dispatch(fetchFinished());
    }
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
