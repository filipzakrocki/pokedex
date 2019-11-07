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

export const fetchPokemon = pokemonQuery => {
  return async dispatch => {
    //dispatch for loading?
    const results = await axios.get(
      `https://api.pokemontcg.io/v1/cards?name=${pokemonQuery}`
    );
    const cardsArray = await results.data.cards;

    dispatch(setResults(cardsArray));
  };
};

// async example
// export const purchaseBurger = (orderData, token) => {
//     return dispatch => {
//       dispatch(purchaseBurgerStart());
//       axios
//         .post("/orders.json?auth=" + token, orderData)
//         .then(response => {
//           dispatch(purchaseBurgerSuccess(response.data.name, orderData));
//         })
//         .catch(error => {
//           dispatch(purchaseBurgerFail());
//         });
//     };
//   };
