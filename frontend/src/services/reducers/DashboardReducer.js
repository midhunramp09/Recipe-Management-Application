import DASHBOARD_ACTIONS from "../actions/DashboardActions";

const initialState = {
    recipes: [],
    search: "",
    categoryFilter: "",
    noRecipesFound: false
};

const dashboardReducer = (state, action) => {
    switch (action.type) {
        case DASHBOARD_ACTIONS.SET_RECIPES:
            return { ...state, recipes: action.payload, noRecipesFound: action.payload.length === 0 };
        case DASHBOARD_ACTIONS.SET_SEARCH:
            return { ...state, search: action.payload };
        case DASHBOARD_ACTIONS.SET_CATEGORY_FILTER:
            return { ...state, categoryFilter: action.payload };
        case DASHBOARD_ACTIONS.SET_NO_RECIPES_FOUND:
            return { ...state, noRecipesFound: action.payload };
        case DASHBOARD_ACTIONS.CLEAR_FILTERS:
            return { ...state, search: "", categoryFilter: "" };
        default:
            return state;
    }
};

export { initialState, dashboardReducer };
