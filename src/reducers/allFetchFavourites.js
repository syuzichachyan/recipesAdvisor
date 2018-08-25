import { RECEIVE_ALL_FAVORITES } from '../constants';

const allFetchFavourites = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default allFetchFavourites;
