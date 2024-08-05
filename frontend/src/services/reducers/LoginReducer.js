import LOGIN_ACTIONS from "../actions/LoginActions";

export const initialState = {
  username: "",
  password: "",
  error: "",
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.SET_USERNAME:
      return { ...state, username: action.payload };
    case LOGIN_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
