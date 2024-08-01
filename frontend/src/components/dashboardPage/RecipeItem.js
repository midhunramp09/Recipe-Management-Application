import React from "react";
import "../../assets/styles/Dashboard.css";

const RecipeItem = ({ recipe, onViewDetails }) => {
    return (
        <div className="recipe-item">
            <div className="recipe-title">
                {recipe.title}
            </div>
            <div className="dashboard-recipe-details">
                <div className="recipe-info">
                    <p>Title: {recipe.title}</p>
                    <p>Category: {recipe.category}</p>
                </div>
                <button onClick={() => onViewDetails(recipe)}>View Details</button>
            </div>
        </div>
    );
};

export default RecipeItem;
