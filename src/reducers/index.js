import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import preference from './preference';
import noPreferences from './noPreferences';
import indifference from './indifference';
import isWideEnough from './isWideEnough';
import collapse from './collapse';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';

export default combineReducers({
  recipes,
  isRecipesFetching,
  preference,
  indifference,
  noPreferences,
  isWideEnough,
  collapse,
  isHealthyRecipesFetching,
  healthyRecipes
});
