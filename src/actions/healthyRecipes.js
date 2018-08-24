import {
  FAVOURITE_RECIPE,
  HEALTHY_RECIPES_FETCHING,
  HEALTHY_RECIPES_FETCHING_FAILURE,
  HEALTHY_RECIPES_FETCHING_SUCCESS
} from '../constants';

export const favouriteHealthyRecipe = (index, q) => ({
  type: FAVOURITE_RECIPE,
  payload: {
    index,
    q
  }
});

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

export const getHealthyRecipes = (labels, page = 0, q) => dispatch => {
  labels = []; //must me deleted
  let connectedLabels;
  if (labels.length) connectedLabels = '&health=' + labels.join('&health=');
  let excludes = ["curry"];
  const arr = [];
  dispatch(healthyRecipesFetching());
    let excludesFoods;
  if(excludes.length)
   excludesFoods = '&excluded=' + excludes.join('&excluded=');
  fetch(
    `https://api.edamam.com/search?q=${q}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=${page *
      24}&to=${24 * (page + 1)}${connectedLabels ? connectedLabels : ''}
        ${excludesFoods?excludesFoods:''}`
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
};
