// src/components/dashboardPage/DashboardPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeList from './RecipeList';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/Dashboard.css';
import { getRecipes } from '../../apis/RecipeApiCalls';

const DashboardPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const navigate = useNavigate();
    const { setSelectedRecipe } = useRecipe();

    useEffect(() => {
        getRecipes()
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.title.toLowerCase().includes(search.toLowerCase()) &&
            (!categoryFilter || recipe.category === categoryFilter)
    );

    const handleViewDetails = (recipe) => {
        setSelectedRecipe(recipe);
        navigate(`/recipe-details/${recipe.id}`);
    };

    const handleEdit = (recipe) => {
        setSelectedRecipe(recipe);
        navigate(`/add-edit-recipe/${recipe.id}`);
    };

    const clearFilters = () => {
        setSearch("");
        setCategoryFilter("");
    };

    return (
        <div className="dashboard">
            <header className="header">
                <h1>Recipe Manager</h1>
                <div className="buttons">
                    <button onClick={() => navigate('/add-edit-recipe')}>Add New Recipe</button>
                    <button>Logout</button>
                </div>
            </header>
            <h2>Recipe Dashboard</h2>
            <p>Total Recipes: {recipes.length}</p>
            <div className="categories">
                Categories:
                <button onClick={() => setCategoryFilter("Breakfast")}>Breakfast</button>
                <button onClick={() => setCategoryFilter("Lunch")}>Lunch</button>
                <button onClick={() => setCategoryFilter("Dinner")}>Dinner</button>
                <button onClick={() => setCategoryFilter("Dessert")}>Dessert</button>
                <button className="clear-filters" onClick={clearFilters}>Clear Filter</button>
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <RecipeList recipes={filteredRecipes} onViewDetails={handleViewDetails} onEdit={handleEdit} />
        </div>
    );
};

export default DashboardPage;
