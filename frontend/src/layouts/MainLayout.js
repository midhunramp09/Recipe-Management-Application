// src/layouts/MainLayout.js
import { Outlet } from 'react-router-dom';
import Header from '../components/headerFooter/Header';
import Footer from '../components/headerFooter/Footer';
import '../assets/styles/MainLayout.css'; // Ensure you have a stylesheet for layout

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <hr />
            <Footer />
        </div>
    );
};

export default MainLayout;
