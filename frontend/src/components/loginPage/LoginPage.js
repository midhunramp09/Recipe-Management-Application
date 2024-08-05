import React, { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/RecipeApiCalls";
import "../../assets/styles/Login.css";
import UserAuthContext from "../../services/contexts/UserAuthContext";
import {
  loginReducer,
  initialState,
} from "../../services/reducers/LoginReducer";
import LOGIN_ACTIONS from "../../services/actions/LoginActions";

const LoginPage = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, error } = state;
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserAuthContext);

  const handleLogin = async () => {
    if (!username || !password) {
      dispatch({
        type: LOGIN_ACTIONS.SET_ERROR,
        payload: "Username and password are required",
      });
      return;
    }

    try {
      const data = await login(username, password);
      if (data.authenticated) {
        localStorage.setItem("loggedIn", true);
        setLoggedIn(true);
        navigate("/dashboard");
      } else {
        dispatch({
          type: LOGIN_ACTIONS.SET_ERROR,
          payload: "Invalid username or password",
        });
      }
    } catch (err) {
      dispatch({ type: LOGIN_ACTIONS.SET_ERROR, payload: err.message });
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Login</h1>
      <div className="loginForm">
        <div className="loginFormGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="loginInput"
            value={username}
            onChange={(e) =>
              dispatch({
                type: LOGIN_ACTIONS.SET_USERNAME,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="loginFormGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="loginInput"
            value={password}
            onChange={(e) =>
              dispatch({
                type: LOGIN_ACTIONS.SET_PASSWORD,
                payload: e.target.value,
              })
            }
          />
        </div>
        {error && <p className="loginError">{error}</p>}
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
