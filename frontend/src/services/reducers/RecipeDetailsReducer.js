import RECIPE_DETAILS_ACTIONS from "../actions/RecipeDetailsActions";

export const initialRecipeDetailsState = {
    selectedRecipe: null,
};

export const recipeDetailsReducer = (state, action) => {
    switch (action.type) {
        case RECIPE_DETAILS_ACTIONS.SET_SELECTED_RECIPE:
            return {
                ...state,
                selectedRecipe: action.payload,
            };
        case RECIPE_DETAILS_ACTIONS.CLEAR_SELECTED_RECIPE:
            return {
                ...state,
                selectedRecipe: null,
            };
        default:
            return state;
    }
};
