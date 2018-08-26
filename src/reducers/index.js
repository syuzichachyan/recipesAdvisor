import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import { randomRecipes, isRandomRecipesFetching } from './randomRecipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import favourites from './favourites';
import preferences from './preferences';
import auth from './authenticated';
import allFetchFavourites from './allFetchFavourites';

export default combineReducers({
  recipes,
  isRecipesFetching,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  allFetchFavourites,
  randomRecipes,
  isRandomRecipesFetching,
  curPage,
  favourites,
  preferences,
  auth,
  form: reduxFormReducer
});
