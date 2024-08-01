// src/reducers/AppReducer.js
export const initialState = {
    loggedIn: false,
  };
  
  export const AppReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN':
        return {
          ...state,
          loggedIn: action.payload,
        };
      default:
        return state;
    }
  };
  