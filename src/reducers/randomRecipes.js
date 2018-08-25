import {
  RANDOM_RECIPES_FETCHING_FAILURE,
  RANDOM_RECIPES_FETCHING_SUCCESS,
  RANDOM_RECIPES_FETCHING
} from '../constants';

const initialStateIsRandomRecipesFetching = false;
export const isRandomRecipesFetching = (
  state = initialStateIsRandomRecipesFetching,
  action
) => {
  switch (action.type) {
    case RANDOM_RECIPES_FETCHING:
      return true;
    case RANDOM_RECIPES_FETCHING_SUCCESS:
      return false;
    case RANDOM_RECIPES_FETCHING_FAILURE:
      return false;
    default:
      return state;
  }
};

const initialStateForRandomRecipes = [];
export const randomRecipes = (state = initialStateForRandomRecipes, action) => {
  switch (action.type) {
    case RANDOM_RECIPES_FETCHING_SUCCESS:
      return action.payload;
    case RANDOM_RECIPES_FETCHING_FAILURE:
      return initialStateForRandomRecipes;
    default:
      return state;
  }
};
