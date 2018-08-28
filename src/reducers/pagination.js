import {
  FIRST_PAGE,
  NEXT_PAGE,
  NEXT_HEALTHY_PAGE,
  NEXT_SPECIAL_PAGE,
  PREV_PAGE,
  PREV_HEALTHY_PAGE,
  PREV_SPECIAL_PAGE
} from '../constants';

const initialState = 0;

const curPage = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return initialState;
    case NEXT_PAGE:
      return action.payload;
    case PREV_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default curPage;
