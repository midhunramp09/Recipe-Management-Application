import logo from "../../assets/images/recipe.png";
import "../../assets/styles/Header.css";

const PublicHeader = () => {
  return (
    <header className="main-header">
      <img src={logo} width="100px" height="100px" alt="Recipe Manager Logo" />
      <h1>Recipe Manager</h1>
    </header>
  );
};

export default PublicHeader;
