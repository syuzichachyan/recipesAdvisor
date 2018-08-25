import {
  RANDOM_RECIPES_FETCHING,
  RANDOM_RECIPES_FETCHING_FAILURE,
  RANDOM_RECIPES_FETCHING_SUCCESS
} from '../constants';

const randomRecipesFetching = () => {
  return { type: RANDOM_RECIPES_FETCHING };
};

const randomRecipesFetchingSuccess = recipes => {
  return {
    type: RANDOM_RECIPES_FETCHING_SUCCESS,
    payload: recipes
  };
};

const randomRecipesFetchingFailure = () => {
  return { type: RANDOM_RECIPES_FETCHING_FAILURE };
};

const includes = [
  'eggs',
  'lemon',
  'fish',
  'yogurt',
  'chicken',
  'eggplant',
  'spaghetti',
  'sardou',
  'potato',
  'pea',
  'soup',
  'mushrooms',
  'chowder',
  'salsa',
  'apple',
  'porridge',
  'broccoli',
  'cucumber',
  'arugula',
  'risotto',
  'tomato',
  'mango',
  'berry',
  'courgette',
  'panini',
  'sausage',
  'cauliflower',
  'saffron',
  'milk',
  'polenta',
  'bittman',
  'chocolate',
  'blackberry',
  'coffee',
  'cardamom',
  'tea',
  'trail',
  'cheddar',
  'bread',
  'biscuits',
  'vegan',
  'milkshake',
  'banana',
  'leaf',
  'salad',
  'quinoa',
  'rhubarb',
  'pistachios'
];

const count = 50;

export const getRandomRecipes = () => {
  return dispatch => {
    const from = Math.floor(Math.random() * count);
    const to = from + count;
    const inclFoods = includes[Math.floor(Math.random() * includes.length)];
    const arr = [];
    dispatch(randomRecipesFetching());
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=8d30ad7e&app_key=2e15423acdc14ff0c010ea43cd8c94e8&from=${from}&to=${to}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        arr.push(recipes);
        return dispatch(randomRecipesFetchingSuccess(arr));
      })
      .catch(error => {
        console.log(error);
        dispatch(randomRecipesFetchingFailure());
      });
  };
};
