import React from "react";
import RecipeItem from "./RecipeItem";
import '../../assets/styles/Dashboard.css'

const RecipeList = ({ recipes, onViewDetails, onEditRecipe }) => {
  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          onViewDetails={onViewDetails}
          onEditRecipe={onEditRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;