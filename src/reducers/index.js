import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import preference from './preference';
import noPreferences from './noPreferences';
import indifference from './indifference';

export default combineReducers({
  recipes,
  isRecipesFetching,
  preference,
  indifference,
  noPreferences
});
