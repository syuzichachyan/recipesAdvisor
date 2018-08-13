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
  const excludes = ['fish'],
    includes = ['eggs'];
  let count = 24;
  if (includes.length) count = 24 / includes.length;
  dispatch(recipesFetching());
  let exludecFoods = '';
  includes.forEach(inclFoods => {
    excludes.forEach(
      food => (exludecFoods = exludecFoods + `&excluded=${food}`)
    );
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=${page *
        count}&to=${(page + 1) * count}&` + exludecFoods
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        dispatch(recipesFetchingSuccess(recipes));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};
