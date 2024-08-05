import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "./RecipeList";
import { useRecipe } from "../../services/contexts/RecipeContext";
import "../../assets/styles/Dashboard.css";
import { getRecipes } from "../../apis/RecipeApiCalls";
import {
  initialState,
  dashboardReducer,
} from "../../services/reducers/DashboardReducer";
import DASHBOARD_ACTIONS from "../../services/actions/DashboardActions";

const DashboardPage = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();
  const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Dessert"];
  useEffect(() => {
    getRecipes()
      .then((response) => {
        dispatch({
          type: DASHBOARD_ACTIONS.SET_RECIPES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching recipes:", error);
        dispatch({
          type: DASHBOARD_ACTIONS.SET_NO_RECIPES_FOUND,
          payload: true,
        });
      });
  }, []);

  const filteredRecipes = state.recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(state.search.toLowerCase()) &&
      (!state.categoryFilter || recipe.category === state.categoryFilter)
  );

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    navigate(`/recipe-details/${recipe.id}`);
  };

  const clearFilters = () => {
    dispatch({ type: DASHBOARD_ACTIONS.CLEAR_FILTERS });
  };

  return (
    <div className="dashboard dashboard-background">
      <div className="dashboard-header dashboardHeader-filter-spacing">
        <h2>Recipe Dashboard</h2>
        <p>Total Recipes: {filteredRecipes.length}</p>
      </div>
      <div className="dashboardCategories-search">
        <div className="dashboardCategories">
          Filters:
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter ${
                state.categoryFilter === category ? "selected" : ""
              }`}
              onClick={() =>
                dispatch({
                  type: DASHBOARD_ACTIONS.SET_CATEGORY_FILTER,
                  payload: category,
                })
              }
            >
              {category}
            </button>
          ))}
          <button className="clear-filters" onClick={clearFilters}>
            Clear Filter
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={state.search}
          onChange={(e) =>
            dispatch({
              type: DASHBOARD_ACTIONS.SET_SEARCH,
              payload: e.target.value,
            })
          }
        />
      </div>
      {filteredRecipes.length === 0 ? (
        <p className="dashboardRecipe-list-notFound">No recipes found</p>
      ) : (
        <RecipeList
          recipes={filteredRecipes}
          onViewDetails={handleViewDetails}
        />
      )}
    </div>
  );
};

export default DashboardPage;
