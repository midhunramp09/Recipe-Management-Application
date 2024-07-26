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

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import '../../assets/styles/App.css';
import PublicRoutes from '../../routes/PublicRoutes';
import { RecipeProvider } from '../../services/contexts/RecipeContext';

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <RouterProvider router={PublicRoutes} />
      </RecipeProvider>
    </div>
  );
}

export default App;
