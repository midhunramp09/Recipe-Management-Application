import ADD_EDIT_RECIPE_ACTIONS from '../actions/AddEditRecipeActions';

const initialState = {
    title: '',
    category: '',
    ingredients: '',
    instructions: '',
    date: '',
    errors: {
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        date: ''
    }
};

const addEditRecipeReducer = (state, action) => {
    switch (action.type) {
        case ADD_EDIT_RECIPE_ACTIONS.SET_FIELD:
            return {
                ...state,
                [action.field]: action.value
            };
        case ADD_EDIT_RECIPE_ACTIONS.SET_ERRORS:
            return {
                ...state,
                errors: action.errors
            };
        case ADD_EDIT_RECIPE_ACTIONS.RESET_FORM:
            return initialState;
        default:
            return state;
    }
};

export { initialState, addEditRecipeReducer };
