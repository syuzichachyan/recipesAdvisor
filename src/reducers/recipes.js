import {
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_FETCHING,
  FIRST_PAGE
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
  const recipe = action.payload;
  switch (action.type) {
    case RECIPES_FETCHING_SUCCESS:
      return [
        ...state,
        {
          ...recipe,
          hits: recipe.hits.map(item => ({
            ...item,
            recipe: {
              ...item.recipe,
              isFavourite: false
            }
          }))
        }
      ];
    case RECIPES_FETCHING_FAILURE:
      return [...state];
    case FIRST_PAGE:
      return initialStateForRecipes;
    default:
      return state;
  }
};
