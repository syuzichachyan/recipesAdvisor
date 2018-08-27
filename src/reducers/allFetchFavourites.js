import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITES } from '../constants';

const allFetchFavourites = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES: {
      return action.payload;
    }
    case RECEIVE_FAVORITES: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default allFetchFavourites;
