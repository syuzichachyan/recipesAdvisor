import { ADD_HEALTH, REMOVE_HEALTH } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_HEALTH:
      state.push(action.health);
      return [...state];
    case REMOVE_HEALTH:
      return state.filter(v => v !== action.health);
    default:
      return state;
  }
};
