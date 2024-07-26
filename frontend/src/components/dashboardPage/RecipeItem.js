import React, { useState } from "react";
import "../../assets/styles/Dashboard.css";

const RecipeItem = ({ recipe, onViewDetails, onEditRecipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="recipe-item">
      <div className="recipe-title" onClick={() => setIsExpanded(!isExpanded)}>
        {recipe.title}
      </div>
      {isExpanded && (
        <div className="recipe-details">
          <p>Title: {recipe.title}</p>
          <p>Category: {recipe.category}</p>
          <button onClick={() => onViewDetails(recipe)}>View Details</button>
          <button onClick={() => onEditRecipe(recipe)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;
