import React from "react";
import RecipeItem from "./RecipeItem";
import "../../assets/styles/Dashboard.css";

const RecipeList = ({ recipes, onViewDetails }) => {
  return (
    <div className="dashboardRecipe-list">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default RecipeList;
