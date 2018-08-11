import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';

export default combineReducers({
    recipes,
    isRecipesFetching
});
