import { Outlet, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import '../assets/styles/MainLayout.css'; // Ensure you have a stylesheet for layout

const MainLayout = () => {
    return (
        <div>
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
            <hr />
            <main>
                <Outlet />
            </main>
            <hr />
            <footer>
                <p>Recipe Manager &copy; 2024</p>
            </footer>
        </div>
    );
};

export default MainLayout;
