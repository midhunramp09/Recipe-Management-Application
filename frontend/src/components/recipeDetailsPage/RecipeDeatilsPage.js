import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/RecipeDetails.css';

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
        console.log("Delete recipe with id:", selectedRecipe.id);
        setSelectedRecipe(null);
        navigate('/dashboard');
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
                <h2>Recipe Details</h2>
                <p><strong>Title:</strong> {selectedRecipe.title}</p>
                <p><strong>Category:</strong> {selectedRecipe.category}</p>
                <div className="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions">
                    <h3>Instructions:</h3>
                    <ul>
                        {selectedRecipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
                <p><strong>Date:</strong> {selectedRecipe.date}</p>
            </section>
            <footer className="footer">
                <button className="edit-button" onClick={handleEdit}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </footer>
        </div>
    );
};

export default RecipeDetailsPage;
