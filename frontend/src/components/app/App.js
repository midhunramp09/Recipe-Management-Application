// src/App.js
import React, { useReducer, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "../../assets/styles/App.css";
import { RecipeProvider } from "../../services/contexts/RecipeContext";
import UserAuthContext from "../../services/contexts/UserAuthContext";
import AppRoutes from "../../routes/AppRoutes";
import { AppReducer, initialState } from "../../services/reducers/AppReducer";

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const loggedInDataInLocalStorage = localStorage.getItem("loggedIn");
    const loggedInData = loggedInDataInLocalStorage ? true : false;
    dispatch({ type: "SET_LOGGED_IN", payload: loggedInData });
  }, []);

  return (
    <div className="App">
      <UserAuthContext.Provider
        value={{
          loggedIn: state.loggedIn,
          setLoggedIn: (value) =>
            dispatch({ type: "SET_LOGGED_IN", payload: value }),
        }}
      >
        <RecipeProvider>
          <RouterProvider router={AppRoutes(state.loggedIn)} />
        </RecipeProvider>
      </UserAuthContext.Provider>
    </div>
  );
}

export default App;
