import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  REQUEST_FAVORITES,
  RECEIVE_FAVORITES
} from '../constants';

export const addToFavourites = recipe => ({
  type: ADD_TO_FAVOURITES,
  payload: recipe
});

export const removeFromFavourites = recipe => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: recipe
});

const requestFavourites = () => {
  return {
    type: REQUEST_FAVORITES
  };
};

const receiveFavourites = () => {
  return {
    type: RECEIVE_FAVORITES
  };
};

export const fetchFavourites = state => {
  return dispatch => {
    dispatch(requestFavourites());
    return fetch(`http://localhost:5003/v1/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        dispatch(receiveFavourites());
      });
  };
};
