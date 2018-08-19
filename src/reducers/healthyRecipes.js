import {
  HEALTHY_RECIPES_FETCHING_SUCCESS,
  HEALTHY_RECIPES_FETCHING_FAILURE,
  HEALTHY_RECIPES_FETCHING,
  FAVOURITE_RECIPE
} from '../constants';
import { checkFavourite } from './favourites';

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
      return action.payload.map(item => ({
        ...item,
        hits: item.hits.map(recipe => ({
          ...recipe,
          recipe: {
            ...recipe.recipe,
            isFavourite: false
          }
        }))
      }));
    case HEALTHY_RECIPES_FETCHING_FAILURE:
      return initialStateForHealthyRecipes;
    case FAVOURITE_RECIPE:
      return checkFavourite(state, action);
    default:
      return state;
  }
};
