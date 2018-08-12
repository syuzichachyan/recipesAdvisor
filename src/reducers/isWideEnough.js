import { IS_WIDE_ENOUGH } from '../constants';

const isWideEnough = (state = false, action) => {
  switch(action.type) {
    case IS_WIDE_ENOUGH:
      return action.payload;
    default:
      return state;
  }
};

export default isWideEnough;