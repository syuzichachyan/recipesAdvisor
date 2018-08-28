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

const recipesFetchingFailure = recipes => {
  return {
    type: RECIPES_FETCHING_FAILURE,
    payload: recipes
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
  const arr = [];
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
      `https://api.edamam.com/search?q=${inclFoods}&app_id=3db55968&app_key=bc9ab2f54295ce6e82c5fa5164ac0ca0&from=${page *
        count}&to=${count * (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        arr.push(recipes);
        return dispatch(recipesFetchingSuccess(arr));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure(arr));
      });
  });
};
