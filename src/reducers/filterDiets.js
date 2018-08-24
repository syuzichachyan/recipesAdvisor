import { ADD_DIET, REMOVE_DIET } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_DIET:
      state.push(action.diet);
      return [...state];
    case REMOVE_DIET:
      return state.filter(v => v !== action.diet);
    default:
      return state;
  }
};
