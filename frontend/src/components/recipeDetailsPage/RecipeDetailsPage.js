// src/components/recipeDetailsPage/RecipeDetailsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/RecipeDetails.css';
import { deleteRecipe } from '../../apis/RecipeApiCalls';

const RecipeDetailsPage = () => {
    const navigate = useNavigate();
    const { selectedRecipe, setSelectedRecipe } = useRecipe();

    if (!selectedRecipe) {
        return <div>No recipe selected</div>;
    }

    const handleEdit = () => {
        navigate(`/add-edit-recipe/${selectedRecipe.id}`);
    };

    const handleDelete = () => {
        deleteRecipe(selectedRecipe.id)
            .then(() => {
                console.log('Recipe deleted');
                setSelectedRecipe(null);
                navigate('/dashboard');
            })
            .catch(error => console.error('Error deleting recipe:', error));
    };

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <div className="recipe-details-page">
            <header className="header">
                <button className="back-button" onClick={handleBack}>Back to List</button>
                <h1>Recipe Manager</h1>
            </header>
            <section className="recipe-details">
                <h2>{selectedRecipe.title}</h2>
                <p><strong>Category:</strong> {selectedRecipe.category}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p><strong>Instructions:</strong></p>
                <ul>
                    {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
                <p><strong>Date:</strong> {selectedRecipe.date}</p>
                <button onClick={handleEdit}>Edit Recipe</button>
                <button onClick={handleDelete}>Delete Recipe</button>
            </section>
        </div>
    );
};

export default RecipeDetailsPage;
