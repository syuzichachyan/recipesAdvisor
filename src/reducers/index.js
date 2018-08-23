import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import curPage from './pagination';
import favourites from './favourites';
import preferences from './preferences';

export default combineReducers({
  recipes,
  isRecipesFetching,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  curPage,
  favourites,
  preferences
});
