// src/pages/LoginPage.js

import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/RecipeApiCalls';
import "../../assets/styles/Login.css";
import UserAuthContext from '../../services/contexts/UserAuthContext';
import { loginReducer, initialState } from '../../services/reducers/LoginReducer';

const LoginPage = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, error } = state;
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserAuthContext);

  const handleLogin = async () => {
    if (!username || !password) {
      dispatch({ type: 'SET_ERROR', payload: 'Username and password are required' });
      return;
    }

    try {
      const data = await login(username, password);
      if (data.authenticated) {
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid username or password' });
      }
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Recipe Manager</h1>
      <div className="form">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="input"
            value={username}
            onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            value={password}
            onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button className="button" onClick={handleLogin}>Login</button>
        <a href="/register" className="registerLink">Register</a>
      </div>
    </div>
  );
};

export default LoginPage;
