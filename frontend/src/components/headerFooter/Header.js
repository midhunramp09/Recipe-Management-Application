// src/components/headerFooter/Header.js
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/recipe.png';
import '../../assets/styles/Header.css'; // Import Header.css

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} width='100px' height='100px' alt='Recipe Manager Logo' />
            <h1>Recipe Manager</h1>
            <nav className="main-nav">
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Dashboard
                </NavLink>
                <NavLink to="/add-edit-recipe" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Add New Recipe
                </NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Logout
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
