import {
  HEALTHY_RECIPES_FETCHING,
  HEALTHY_RECIPES_FETCHING_FAILURE,
  HEALTHY_RECIPES_FETCHING_SUCCESS
} from '../constants';

export function healthyRecipesFetching() {
  return { type: HEALTHY_RECIPES_FETCHING };
}

const healthyRecipesFetchingSuccess = healthyRecipes => {
  return {
    type: HEALTHY_RECIPES_FETCHING_SUCCESS,
    payload: healthyRecipes
  };
};

const healthyRecipesFetchingFailure = () => {
  return { type: HEALTHY_RECIPES_FETCHING_FAILURE };
};

export const getHealthyRecipes = label => dispatch => {
  let includes = ['eggs', 'fish'],
    excludes = [];
  const arr = [];
  dispatch(healthyRecipesFetching());
  let exludesFoods = '';
  excludes.forEach(food => (exludesFoods = exludesFoods + `&excluded=${food}`));
  includes.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=0&to=6&health=${label}
        ${exludesFoods}`
        
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        arr.push(recipes);
        return dispatch(healthyRecipesFetchingSuccess(arr));
      })
      .catch(error => {
        console.log(error);
        dispatch(healthyRecipesFetchingFailure());
      });
  });
};
