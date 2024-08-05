import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedLayout from "../layouts/ProtectedLayout";
import DashboardPage from "../components/dashboardPage/DashboardPage";
import AddEditRecipePage from "../components/addEditRecipePage/AddEditRecipePage";
import RecipeDetailsPage from "../components/recipeDetailsPage/RecipeDetailsPage";
import PublicLayout from "../layouts/PublicLayout";
import LoginPage from "../components/loginPage/LoginPage";
import LoggedInError from "../components/loggedInError/LoggedInError";

const AppRoutes = (loggedIn) =>
  createBrowserRouter([
    {
      path: "/",
      element: loggedIn ? <Navigate to="/dashboard" /> : <PublicLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "/500",
          element: <LoggedInError />,
        },
      ],
    },
    {
      path: "/",
      element: loggedIn ? <ProtectedLayout /> : <Navigate to="/" />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/add-edit-recipe/:id",
          element: <AddEditRecipePage />,
        },
        {
          path: "/add-edit-recipe",
          element: <AddEditRecipePage />,
        },
        {
          path: "/recipe-details/:id",
          element: <RecipeDetailsPage />,
        },
      ],
    },
  ]);

export default AppRoutes;
