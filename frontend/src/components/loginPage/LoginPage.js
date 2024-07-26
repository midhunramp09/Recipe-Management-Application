import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/Login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1 className="title">Recipe Manager</h1>
      <div className="form">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="input" />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
          />
        </div>
        <button className="button" onClick={handleLogin}>Login</button>
        <a href="/register" className="registerLink">Register</a>
      </div>
    </div>
  );
};

export default LoginPage;
