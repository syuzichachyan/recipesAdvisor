import { FIRST_PAGE, NEXT_PAGE } from '../constants';

const initialState = 0;

const curPage = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return initialState;
    case NEXT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default curPage;
