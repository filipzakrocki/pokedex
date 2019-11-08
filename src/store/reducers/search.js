import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  query: null,
  results: null,
  loading: false,
  cardOpen: false
};

const setSearchQuery = (state, action) => {
  return updateObject(state, { query: action.query });
};
const setResults = (state, action) => {
  return updateObject(state, { results: action.results });
};
const fetchStarted = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchFinished = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      return setSearchQuery(state, action);
    case actionTypes.SET_RESULTS:
      return setResults(state, action);
    case actionTypes.FETCH_STARTED:
      return fetchStarted(state, action);
    case actionTypes.FETCH_FINISHED:
      return fetchFinished(state, action);
    // case actionTypes.AUTH_START:
    //   return authStart(state, action);
    // case actionTypes.AUTH_SUCCESS:
    //   return authSuccess(state, action);
    // case actionTypes.AUTH_FAIL:
    //   return authFail(state, action);
    // case actionTypes.AUTH_LOGOUT:
    //   return authLogOut(state, action);
    // case actionTypes.SET_AUTH_REDIRECT:
    //   return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
