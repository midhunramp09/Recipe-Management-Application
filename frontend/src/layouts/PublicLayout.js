import { Outlet } from 'react-router-dom';
import PublicHeader from '../components/headerFooter/PublicHeader';
import Footer from '../components/headerFooter/Footer';
import '../assets/styles/MainLayout.css'; // Ensure you have a stylesheet for layout

const PublicLayout = () => {
    return (
        <div>
            <PublicHeader />
            <hr />
            <main>
                <Outlet />
            </main>
            <hr />
            <Footer />
        </div>
    );
};

export default PublicLayout;
