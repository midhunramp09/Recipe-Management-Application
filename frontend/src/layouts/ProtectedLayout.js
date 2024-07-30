import { Navigate, Outlet } from "react-router-dom";
import ProtectedHeader from "../components/headerFooter/ProtectedHeader";
import Footer from "../components/headerFooter/Footer";
import "../assets/styles/MainLayout.css"; // Ensure you have a stylesheet for layout
import { useContext } from "react";
import UserAuthContext from "../services/contexts/UserAuthContext";

const ProtectedLayout = () => {
  const { loggedIn } = useContext(UserAuthContext);

  if (!loggedIn) return <Navigate to="/500" />;

  return (
    <div>
      <ProtectedHeader />
      <hr />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
