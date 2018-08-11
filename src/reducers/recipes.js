import {
    RECIPES_FETCHING_FAILURE,
    RECIPES_FETCHING_SUCCESS,
    RECIPES_FETCHING
} from '../constants';

const initialStateIsRecipesFetching = false;
export const isRecipesFetching = (
    state = initialStateIsRecipesFetching,
    action
) => {
    switch (action.type) {
        case RECIPES_FETCHING:
            return true;
        case RECIPES_FETCHING_SUCCESS:
            return false;
        case RECIPES_FETCHING_FAILURE:
            return false;
        default:
            return state;
    }
};
const initialStateForRecipes = [];
export const recipes = (state = initialStateForRecipes, action) => {
    switch (action.type) {
        case RECIPES_FETCHING_SUCCESS:
            return [...state, action.payload];
        case RECIPES_FETCHING_FAILURE:
            return initialStateForRecipes;
        default:
            return state;
    }
};
