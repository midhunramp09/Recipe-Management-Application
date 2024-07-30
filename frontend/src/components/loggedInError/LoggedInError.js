import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";

const LoggedInError = () => {
  return (
    <div>
      <h1>
        You are not authorized to view. Please <Link to="/">Login</Link>
      </h1>
    </div>
  );
};

export default LoggedInError;
