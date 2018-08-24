import { REQUEST_SIGNUP, RECEIVE_SIGNUP } from '../constants';

const requestSignup = () => {
  return {
    type: REQUEST_SIGNUP
  };
};

const receiveSignup = () => {
  return {
    type: RECEIVE_SIGNUP
  };
};

export const fetchSignup = (state, prop) => {
  return dispatch => {
    dispatch(requestSignup());
    return fetch(`http://localhost:5003/v1/signup`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(json => {
        prop;
        dispatch(receiveSignup());
      });
  };
};
