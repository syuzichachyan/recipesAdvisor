import {
  FAVOURITE_RECIPE,
  SPECIAL_DIETS_FETCHING,
  SPECIAL_DIETS_FETCHING_FAILURE,
  SPECIAL_DIETS_FETCHING_SUCCESS
} from '../constants';

export const favouriteSpecialRecipe = (index, q) => ({
  type: FAVOURITE_RECIPE,
  payload: {
    index,
    q
  }
});

const specialDietsFetching = () => {
  return {
    type: SPECIAL_DIETS_FETCHING
  };
};

const specialDietsFetchingSuccess = specialDiets => {
  return {
    type: SPECIAL_DIETS_FETCHING_SUCCESS,
    payload: specialDiets
  };
};

const specialDietsFetchingFailure = () => {
  return {
    type: SPECIAL_DIETS_FETCHING_FAILURE
  };
};

export const getSpecialDiets = (labels, page = 0, q) => dispatch => {
  labels = ['balanced']; //must me deleted
  let connectedLabels;
  if (labels.length) connectedLabels = '&diet=' + labels.join('&diet=');
  const excludes = ['curry'];
  let excludesFoods;
  if (excludes.length)
    excludesFoods = '&excluded=' + excludes.join('&excluded=');
  const count = 24;
  const arr = [];
  dispatch(specialDietsFetching());

  fetch(
    `https://api.edamam.com/search?q=${q}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=${page *
      count}&to=${count * (page + 1)}${connectedLabels ? connectedLabels : ''}${
      excludesFoods ? excludesFoods : ''
    }`
  )
    .then(recipes => recipes.json())
    .then(recipes => {
      arr.push(recipes);
      return dispatch(specialDietsFetchingSuccess(arr));
    })
    .catch(error => {
      console.log(error);
      dispatch(specialDietsFetchingFailure());
    });
};
