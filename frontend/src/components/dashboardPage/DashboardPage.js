import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeList from './RecipeList';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/Dashboard.css';
import { getRecipes } from '../../apis/RecipeApiCalls';
import { initialState, dashboardReducer } from '../../services/reducers/DashboardReducer';

const DashboardPage = () => {
    const [state, dispatch] = useReducer(dashboardReducer, initialState);
    const navigate = useNavigate();
    const { setSelectedRecipe } = useRecipe();

    useEffect(() => {
        getRecipes()
            .then(response => {
                dispatch({ type: 'SET_RECIPES', payload: response.data });
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                dispatch({ type: 'SET_NO_RECIPES_FOUND', payload: true });
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
        dispatch({ type: 'CLEAR_FILTERS' });
    };

    return (
        <div className="dashboard">
            <h2>Recipe Dashboard</h2>
            <p>Total Recipes: {state.recipes.length}</p>
            <div className="categories">
                Categories:
                <button onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', payload: "Breakfast" })}>Breakfast</button>
                <button onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', payload: "Lunch" })}>Lunch</button>
                <button onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', payload: "Dinner" })}>Dinner</button>
                <button onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', payload: "Dessert" })}>Dessert</button>
                <button className="clear-filters" onClick={clearFilters}>Clear Filter</button>
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={state.search}
                onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
            />
            {state.noRecipesFound ? (
                <p>No recipes found</p>
            ) : (
                <RecipeList recipes={filteredRecipes} onViewDetails={handleViewDetails} />
            )}
        </div>
    );
};

export default DashboardPage;
