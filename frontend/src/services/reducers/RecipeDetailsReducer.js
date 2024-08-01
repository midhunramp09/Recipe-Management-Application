export const initialRecipeDetailsState = {
    selectedRecipe: null,
};

export const recipeDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SELECTED_RECIPE':
            return {
                ...state,
                selectedRecipe: action.payload,
            };
        case 'CLEAR_SELECTED_RECIPE':
            return {
                ...state,
                selectedRecipe: null,
            };
        default:
            return state;
    }
};
