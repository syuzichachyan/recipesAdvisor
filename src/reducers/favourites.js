import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants';

const initialState = [];

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, { ...action.payload, isFavourite: true }];
    case REMOVE_FROM_FAVOURITES:
      return state.filter(recipe => recipe.uri !== action.payload);
    default:
      return state;
  }
};

export default favourites;

export const checkFavourite = (state, action) => {
  return state.map(item => {
    if (item.q === action.payload.q) {
      return {
        ...item,
        hits: item.hits.map((recipe, i) => {
          if (i === action.payload.index) {
            return {
              ...recipe,
              recipe: {
                ...recipe.recipe,
                isFavourite: !recipe.recipe.isFavourite
              }
            };
          }
          return recipe;
        })
      };
    } else return item;
  });
};
