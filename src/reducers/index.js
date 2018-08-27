import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import { randomRecipes, isRandomRecipesFetching } from './randomRecipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import preferences from './preferences';
import filter from './filter';

import auth from './authenticated';

import {
  allFetchFavourites,
  isFavouriteRecipesFetching
} from './allFetchFavourites';


export default combineReducers({
  recipes,
  isRecipesFetching,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  allFetchFavourites,
  isFavouriteRecipesFetching,
  randomRecipes,
  isRandomRecipesFetching,
  curPage,
  preferences,
  auth,
  form: reduxFormReducer,
  filter
});
