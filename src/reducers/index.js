import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import preference from './preference';
import noPreferences from './noPreferences';
import indifference from './indifference';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import { curPage, curHealthyPage } from './pagination';

export default combineReducers({
  recipes,
  isRecipesFetching,
  preference,
  indifference,
  noPreferences,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  curPage,
  curHealthyPage
});
