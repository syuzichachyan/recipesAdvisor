import {
  HEALTHY_RECIPES_FETCHING_SUCCESS,
  HEALTHY_RECIPES_FETCHING_FAILURE,
  HEALTHY_RECIPES_FETCHING
} from '../constants';

const initialStateIsHealthyRecipesFetching = false;
export const isHealthyRecipesFetching = (
  state = initialStateIsHealthyRecipesFetching,
  action
) => {
  switch (action.type) {
    case HEALTHY_RECIPES_FETCHING:
      return true;
    case HEALTHY_RECIPES_FETCHING_SUCCESS:
      return false;
    case HEALTHY_RECIPES_FETCHING_FAILURE:
      return false;
    default:
      return state;
  }
};

const initialStateForHealthyRecipes = [];
export const healthyRecipes = (
  state = initialStateForHealthyRecipes,
  action
) => {
  switch (action.type) {
    case HEALTHY_RECIPES_FETCHING_SUCCESS:
      return [...action.payload];
    case HEALTHY_RECIPES_FETCHING_FAILURE:
      return initialStateForHealthyRecipes;
    default:
      return state;
  }
};
