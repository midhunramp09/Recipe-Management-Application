import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../components/loginPage/LoginPage';
import DashboardPage from '../components/dashboardPage/DashboardPage';
import AddEditRecipePage from '../components/addEditRecipePage/AddEditRecipePage'; // Adjust import path
import RecipeDetailsPage from '../components/recipeDetailsPage/RecipeDeatilsPage'; // Adjust import path

const PublicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/add-edit-recipe/:id',
        element: <AddEditRecipePage />
      },
      {
        path: '/add-edit-recipe',
        element: <AddEditRecipePage />
      },
      {
        path: '/recipe-details/:id',
        element: <RecipeDetailsPage />
      }
    ]
  }
]);

export default PublicRoutes;
