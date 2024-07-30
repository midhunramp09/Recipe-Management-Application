import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/RecipeApiCalls';
import "../../assets/styles/Login.css";
import UserAuthContext from '../../services/contexts/UserAuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserAuthContext);

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      const data = await login(username, password);
      if (data.authenticated) {
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError(err.message);
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
