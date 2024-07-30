// import logo from '../../assets/images/logo.svg';
// import '../../assets/styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { RouterProvider } from "react-router-dom";
// import "../../assets/styles/App.css";
// import PublicRoutes from "../../routes/PublicRoutes";

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={PublicRoutes} />
//       {/* <RecipeDetailsPage
//         recipe={{
//           title: "Spaghetti Bolognese",
//           category: "Dinner",
//           ingredients: ["Spaghetti", "Ground beef", "Tomato sauce"],
//           instructions: ["Boil spaghetti", "Cook beef", "Mix with sauce"],
//           date: "2024-07-23",
//         }}
//         onEdit={() => console.log("Edit clicked")}
//         onDelete={() => console.log("Delete clicked")}
//         onBack={() => console.log("Back clicked")}
//       /> */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import '../../assets/styles/App.css';
import { RecipeProvider } from '../../services/contexts/RecipeContext';
import UserAuthContext from '../../services/contexts/UserAuthContext';
import AppRoutes from '../../routes/AppRoutes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInDataInLocalStorage = localStorage.getItem("loggedIn");
    const loggedInData = loggedInDataInLocalStorage ? true : false;
    setLoggedIn(loggedInData);
  }, []);

  return (
    <div className="App">
      <UserAuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        <RecipeProvider>
          <RouterProvider router={AppRoutes(loggedIn)} />
        </RecipeProvider>
      </UserAuthContext.Provider>
    </div>
  );
}

export default App;
