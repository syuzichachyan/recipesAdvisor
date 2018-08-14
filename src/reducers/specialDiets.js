import {
  SPECIAL_DIETS_FETCHING_SUCCESS,
  SPECIAL_DIETS_FETCHING_FAILURE,
  SPECIAL_DIETS_FETCHING
} from '../constants';

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
      return [...action.payload];
    case SPECIAL_DIETS_FETCHING_FAILURE:
      return initialStateForSpecialDiets;
    default:
      return state;
  }
};
