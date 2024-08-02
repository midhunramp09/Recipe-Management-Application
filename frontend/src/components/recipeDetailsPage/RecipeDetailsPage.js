import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../../services/contexts/RecipeContext";
import "../../assets/styles/RecipeDetails.css";
import { deleteRecipe } from "../../apis/RecipeApiCalls";
import {
  initialRecipeDetailsState,
  recipeDetailsReducer,
} from "../../services/reducers/RecipeDetailsReducer";

const RecipeDetailsPage = () => {
  const navigate = useNavigate();
  const { selectedRecipe, setSelectedRecipe } = useRecipe();
  const [state, dispatch] = useReducer(
    recipeDetailsReducer,
    initialRecipeDetailsState
  );

  useEffect(() => {
    if (selectedRecipe) {
      dispatch({ type: "SET_SELECTED_RECIPE", payload: selectedRecipe });
    }
  }, [selectedRecipe]);

  if (!state.selectedRecipe) {
    return <div>No recipe selected</div>;
  }

  const handleEdit = () => {
    navigate(`/add-edit-recipe/${state.selectedRecipe.id}`);
  };

  const handleDelete = () => {
    deleteRecipe(state.selectedRecipe.id)
      .then(() => {
        console.log("Recipe deleted");
        dispatch({ type: "CLEAR_SELECTED_RECIPE" });
        setSelectedRecipe(null);
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error deleting recipe:", error));
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="recipe-details-page">
      <section className="recipe-details">
        <div className="recipe-details-content">
          <h2>{state.selectedRecipe.title}</h2>
          <p className="category">
            <span>Category: </span>{" "}
            <span className="category-data">
              {state.selectedRecipe.category}
            </span>
          </p>
          <p className="ingredients-label">Ingredients:</p>
          <ul className="ingredients">
            {state.selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="instructions-label">Instructions:</p>
          <ul className="instructions">
            {state.selectedRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <p className="date">
            <span>Date Added: </span>{" "}
            <span className="date-data">{state.selectedRecipe.date}</span>
          </p>
        </div>
        <div className="recipe-details-buttons">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <div className="button-group">
            <button className="edit-button" onClick={handleEdit}>
              Edit Recipe
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete Recipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailsPage;
