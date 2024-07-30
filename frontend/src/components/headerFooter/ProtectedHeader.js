import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/recipe.png";
import "../../assets/styles/Header.css";
import { useContext } from "react";
import UserAuthContext from "../../services/contexts/UserAuthContext";

const ProtectedHeader = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserAuthContext);

  const handleLogout = () => {
    navigate("/", { replace: true });
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <header className="main-header">
      <img src={logo} width="100px" height="100px" alt="Recipe Manager Logo" />
      <h1>Recipe Manager</h1>
      <nav className="main-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/add-edit-recipe"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Add New Recipe
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default ProtectedHeader;
