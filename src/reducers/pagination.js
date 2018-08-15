import { FIRST_PAGE, NEXT_PAGE, NEXT_HEALTHY_PAGE, PREV_PAGE, PREV_HEALTHY_PAGE } from '../constants';

export const curPage = (state = 0, action) => {
  switch(action.type) {
    case FIRST_PAGE:
      return action.payload;
    case NEXT_PAGE:
      return action.payload;
    case PREV_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export const curHealthyPage = (state = 0, action) => {
  switch(action.type) {
    case FIRST_PAGE:
      return action.payload;
    case NEXT_HEALTHY_PAGE:
      return action.payload;
    case PREV_HEALTHY_PAGE:
      return action.payload;
    default:
      return state;
  }
};