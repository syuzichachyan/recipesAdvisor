import { ADD_PREFERENCE, REMOVE_PREFERENCE } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PREFERENCE:
      state.push({ id: idGen(state), ...action.pref });
      return [...state];
    case REMOVE_PREFERENCE:
      return state.filter(v => v.id !== action.payload.id);
    default:
      return state;
  }
};

const idGen = state => {
  let id = 1;
  state.forEach(v => {
    if (v.id >= id) id = v.id + 1;
  });
  return id;
};
