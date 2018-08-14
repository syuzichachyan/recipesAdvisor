import {
  SPECIAL_DIETS_FETCHING,
  SPECIAL_DIETS_FETCHING_FAILURE,
  SPECIAL_DIETS_FETCHING_SUCCESS
} from '../constants';
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

export const getSpecialDiets = (label, page = 0) => dispatch => {
  let includes = ['eggs', 'fish'],
    excludes = [];
  const count = 24 / includes.length;
  const arr = [];
  dispatch(specialDietsFetching());
  let exludesFoods = '';
  excludes.forEach(food => (exludesFoods = exludesFoods + `&excluded=${food}`));
  includes.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=${page *
        count}&to=${count * (page + 1)}&diet=${label}
        ${exludesFoods}`
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
  });
};
