const initialState = {
    recipes: [],
    search: "",
    categoryFilter: "",
    noRecipesFound: false
};

const dashboardReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return { ...state, recipes: action.payload, noRecipesFound: action.payload.length === 0 };
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_CATEGORY_FILTER':
            return { ...state, categoryFilter: action.payload };
        case 'SET_NO_RECIPES_FOUND':
            return { ...state, noRecipesFound: action.payload };
        case 'CLEAR_FILTERS':
            return { ...state, search: "", categoryFilter: "" };
        default:
            return state;
    }
};

export { initialState, dashboardReducer };
