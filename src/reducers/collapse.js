import { COLLAPSE } from '../constants';

const collapse = (state = false, action) => {
  switch(action.type) {
    case COLLAPSE:
      return action.payload;
    default:
      return state;
  }
};

export default collapse;