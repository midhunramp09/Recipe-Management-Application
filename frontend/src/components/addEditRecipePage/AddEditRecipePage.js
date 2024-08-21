import React, { useReducer, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipe } from "../../services/contexts/RecipeContext";
import "../../assets/styles/AddEditRecipe.css";
import { useMutation } from "@apollo/client";
import {
  addEditRecipeReducer,
  initialState,
} from "../../services/reducers/AddEditRecipeReducer";
import ADD_EDIT_RECIPE_ACTIONS from "../../services/actions/AddEditRecipeActions";
import { CREATE_RECIPE, UPDATE_RECIPE } from "../../apis/RecipeGraphQLQueries";
import GraphqlClient from "../../apis/ApolloClient";

const AddEditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedRecipe, setSelectedRecipe } = useRecipe();
  const [state, dispatch] = useReducer(addEditRecipeReducer, initialState);
  const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Dessert"];
  const [createRecipe, { data: createData, error: createError }] = useMutation(CREATE_RECIPE, { client: GraphqlClient });
  const [updateRecipe, { data: updateData, error: updateError }] = useMutation(UPDATE_RECIPE, { client: GraphqlClient });

  useEffect(() => {
    if (id && selectedRecipe) {
      dispatch({
        type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
        field: "title",
        value: selectedRecipe.title,
      });
      dispatch({
        type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
        field: "category",
        value: selectedRecipe.category,
      });
      dispatch({
        type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
        field: "ingredients",
        value: selectedRecipe.ingredients.join(", "),
      });
      dispatch({
        type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
        field: "instructions",
        value: selectedRecipe.instructions.join(", "),
      });
      dispatch({
        type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
        field: "date",
        value: selectedRecipe.date,
      });
    }
  }, [id, selectedRecipe]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      title: "",
      category: "",
      ingredients: "",
      instructions: "",
      date: "",
    };

    if (!state.title) {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (!state.category) {
      newErrors.category = "Category is required";
      valid = false;
    }

    if (!state.ingredients) {
      newErrors.ingredients = "Ingredients are required";
      valid = false;
    }

    if (!state.instructions) {
      newErrors.instructions = "Instructions are required";
      valid = false;
    }

    if (!state.date) {
      newErrors.date = "Date is required";
      valid = false;
    }

    dispatch({ type: ADD_EDIT_RECIPE_ACTIONS.SET_ERRORS, errors: newErrors });
    return valid;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    const recipeData = {
      title: state.title,
      category: state.category,
      ingredients: state.ingredients.split(", "),
      instructions: state.instructions.split(", "),
      date: state.date,
    };

    try {
      if (id) {
        await updateRecipe({
          variables: {
            id:  selectedRecipe.id,
            ...recipeData,
          },
        });

        if (updateData) {
          setSelectedRecipe(updateData.updateRecipe);
          navigate(`/recipe-details/${id}`);
        }

        else if (updateError) {
          console.error("Error updating recipe:", updateError);
        }
      } else {
        await createRecipe({
          variables: {
            ...recipeData,
          },
        });

        if (createData) {
          setSelectedRecipe(createData.createRecipe);
          navigate(`/recipe-details/${createData.createRecipe.id}`);
        }

        else if (createError) {
          console.error("Error creating recipe:", createError);
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="addEditPage-container">
      <div className="addEditForm-container">
        <div className="addEditForm-group">
          <label>Title:</label>
          <input
            type="text"
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
                field: "title",
                value: e.target.value,
              })
            }
          />
          {state.errors.title && (
            <p className="addEditError-message">{state.errors.title}</p>
          )}
        </div>
        <div className="addEditForm-group">
          <label>Category:</label>
          <select
            value={state.category}
            onChange={(e) =>
              dispatch({
                type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
                field: "category",
                value: e.target.value,
              })
            }
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {state.errors.category && (
            <p className="addEditError-message">{state.errors.category}</p>
          )}
        </div>
        <div className="addEditForm-group">
          <label>Ingredients: (use , to separate)</label>
          <textarea
            value={state.ingredients}
            onChange={(e) =>
              dispatch({
                type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
                field: "ingredients",
                value: e.target.value,
              })
            }
          />
          {state.errors.ingredients && (
            <p className="addEditError-message">{state.errors.ingredients}</p>
          )}
        </div>
        <div className="addEditForm-group">
          <label>Instructions: (use , to separate)</label>
          <textarea
            value={state.instructions}
            onChange={(e) =>
              dispatch({
                type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
                field: "instructions",
                value: e.target.value,
              })
            }
          />
          {state.errors.instructions && (
            <p className="addEditError-message">{state.errors.instructions}</p>
          )}
        </div>
        <div className="addEditForm-group">
          <label>Date:</label>
          <input
            type="date"
            value={state.date}
            onChange={(e) =>
              dispatch({
                type: ADD_EDIT_RECIPE_ACTIONS.SET_FIELD,
                field: "date",
                value: e.target.value,
              })
            }
          />
          {state.errors.date && (
            <p className="addEditError-message">{state.errors.date}</p>
          )}
        </div>
        <div className="addEditButton-group">
          <button className="addEditSave-button" onClick={handleSave}>
            Save
          </button>
          <button className="addEditCancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditRecipePage;
