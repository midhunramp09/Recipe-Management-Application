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

const ADD_EDIT_RECIPE_ACTIONS = {
    SET_FIELD: 'SET_FIELD',
    SET_ERRORS: 'SET_ERRORS',
    RESET_FORM: 'RESET_FORM'
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

export { initialState, addEditRecipeReducer, ADD_EDIT_RECIPE_ACTIONS };
