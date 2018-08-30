import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS
} from '../constants';

const recipesFetching = () => {
  return { type: RECIPES_FETCHING };
};

const recipesFetchingSuccess = recipe => {
  return {
    type: RECIPES_FETCHING_SUCCESS,
    payload: recipe
  };
};

const recipesFetchingFailure = () => {
  return {
    type: RECIPES_FETCHING_FAILURE
  };
};

const joiner = (arr, type) => {
  return `&${type}` + arr.join(`&${type}`);
};

export const getRecipes = (page = 0, labels = [], q, type) => dispatch => {
  console.log(page);
  dispatch(recipesFetching());
  const excludes = [],
    includes = ['eggs', 'fish'],
    random = ['soy', 'chocolate'];
  let count = 24;
  let excludesFoods = '',
    connectedLabels = '';
  if (labels.length) connectedLabels = joiner(labels, type);
  let include = [];
  if (q !== undefined) {
    include.push(q);
    if (excludes.length) excludesFoods = joiner(excludes, 'excluded');
  } else {
    if (includes.length) {
      if (excludes.length) excludesFoods = joiner(excludes, 'excluded');
      include = includes;
      count = count / include.length;
    } else {
      include = random;
      count = count / random.length;
    }
  }
  include.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=a37bb1eb&app_key=3f704a5ce747891ed2b8978661054585&from=${page *
        count}&to=${count * (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        return dispatch(recipesFetchingSuccess(recipes));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};
