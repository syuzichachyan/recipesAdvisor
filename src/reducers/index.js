import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { healthyRecipes, isHealthyRecipesFetching } from './healthyRecipes';
import { specialDiets, isSpecialDietsFetching } from './specialDiets';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import favourites from './favourites';
import preferences from './preferences';
import filterDiets from './filterDiets';
import filterHealths from './filterHealths';

export default combineReducers({
  recipes,
  isRecipesFetching,
  isHealthyRecipesFetching,
  healthyRecipes,
  specialDiets,
  isSpecialDietsFetching,
  curPage,
  favourites,
  preferences,
  form: reduxFormReducer,
  filterDiets,
  filterHealths
});
