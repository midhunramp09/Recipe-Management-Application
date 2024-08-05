import React from "react";
import "../../assets/styles/Dashboard.css";

const RecipeItem = ({ recipe, onViewDetails }) => {
  return (
    <div className="dashboardRecipe-item">
      <div className="dashboardRecipe-title">{recipe.title}</div>
      <div className="dashboardRecipe-details">
        <div className="dashboardRecipe-info">
          <p>Title: {recipe.title}</p>
          <p>Category: {recipe.category}</p>
        </div>
        <button onClick={() => onViewDetails(recipe)}>View Details</button>
      </div>
    </div>
  );
};

export default RecipeItem;
