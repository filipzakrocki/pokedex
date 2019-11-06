import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../shared/utility";

const initialState = {
  search: {
    query: null
  }
};

const setSearchQuery = (state, action) => {
  return {
    ...state,
    search: {
      ...state.search,
      query: action.query
    }
  };
};

// const authStart = (state, action) => {
//   return updateObject(state, { error: null, loading: true });
// };
// const authSuccess = (state, action) => {
//   return updateObject(state, {
//     loading: false,
//     localId: action.localId,
//     idToken: action.idToken,
//     error: null
//   });
// };
// const authFail = (state, action) => {
//   return updateObject(state, { loading: false, error: action.error });
// };

// const authLogOut = (state, action) => {
//   return updateObject(state, { idToken: null, localId: null });
// };

// const setAuthRedirectPath = (state, action) => {
//   return updateObject(state, { authRedirectPath: action.path });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      return setSearchQuery(state, action);
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
