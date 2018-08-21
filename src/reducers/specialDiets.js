import {
  SPECIAL_DIETS_FETCHING_SUCCESS,
  SPECIAL_DIETS_FETCHING_FAILURE,
  SPECIAL_DIETS_FETCHING,
  FAVOURITE_RECIPE
} from '../constants';
import { checkFavourite } from './favourites';

const initialStateIsSpecialDietsFetching = false;
export const isSpecialDietsFetching = (
  state = initialStateIsSpecialDietsFetching,
  action
) => {
  switch (action.type) {
    case SPECIAL_DIETS_FETCHING:
      return true;
    case SPECIAL_DIETS_FETCHING_SUCCESS:
      return false;
    case SPECIAL_DIETS_FETCHING_FAILURE:
      return false;
    default:
      return state;
  }
};

const initialStateForSpecialDiets = [];
export const specialDiets = (state = initialStateForSpecialDiets, action) => {
  switch (action.type) {
    case SPECIAL_DIETS_FETCHING_SUCCESS:
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
    case SPECIAL_DIETS_FETCHING_FAILURE:
      return initialStateForSpecialDiets;
    case FAVOURITE_RECIPE:
      return checkFavourite(state, action);
    default:
      return state;
  }
};
