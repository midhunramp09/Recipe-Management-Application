import APP_ACTIONS from "../actions/AppActions";

export const initialState = {
  loggedIn: false,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};
