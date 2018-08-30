import { RECEIVE_AUTHENTICATED, LOGOUT_USER } from '../constants';

const auth = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_AUTHENTICATED: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default auth;
