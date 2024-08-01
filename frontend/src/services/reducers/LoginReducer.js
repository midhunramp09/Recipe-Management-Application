// src/reducers/LoginReducer.js

export const initialState = {
    username: '',
    password: '',
    error: ''
  };
  
  export const loginReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return { ...state, username: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  