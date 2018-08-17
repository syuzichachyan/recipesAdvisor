import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import isWideEnough from './isWideEnough';
import collapse from './collapse';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  recipes,
  isRecipesFetching,
  isWideEnough,
  collapse,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  form: reduxFormReducer
});
