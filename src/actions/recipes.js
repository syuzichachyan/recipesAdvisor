import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS
} from '../constants';

const recipesFetching = () => {
  return { type: RECIPES_FETCHING };
};

const recipesFetchingSuccess = recipes => {
  return {
    type: RECIPES_FETCHING_SUCCESS,
    payload: recipes
  };
};

const recipesFetchingFailure = () => {
  return { type: RECIPES_FETCHING_FAILURE };
};

export const getRecipes = (page = 0) => dispatch => {
  const excludes = [];
  let includes = [
    'eggs',
    'fish',
    'cauliflower',
    'saffron',
    'milk',
    'polenta',
    'bittman',
    'chocolate',
    'blackberry',
    'hfdghdj',
    'dsfhsdkh',
    'udshfihdsjfio',
    'dsguhdsig'
  ];
  includes.sort(() => 0.5 - Math.random());
  const include = includes.splice(0, 2);
  const count = 24 / include.length;
  const arr = [];
  dispatch(recipesFetching());
  include.forEach(inclFoods => {
    let excludesFoods;
    if (excludes.length)
      excludesFoods = '&excluded=' + excludes.join('&excluded=');
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=8d30ad7e&app_key=2e15423acdc14ff0c010ea43cd8c94e8&from=${page *
        count}&to=${(page + 1) * count}&${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        arr.push(recipes);
        return dispatch(recipesFetchingSuccess(arr));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};
