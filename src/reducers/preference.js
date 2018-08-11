import { ADD_PREFERENCE, REMOVE_PREFERENCE } from '../constants';

const preference = (state = [], action) => {
  switch (action.type) {
    case ADD_PREFERENCE:
      return [
        ...state,
        {
          id: idGen(state),
          text: action.text
        }
      ];
    case REMOVE_PREFERENCE:
      return state.filter((v, i) => {
        if (v.id === action.id) return false;
        return true;
      });
    default:
      return state;
  }
};

export default preference;

function idGen(state) {
  let id = 1;
  state.forEach(v => {
    if (v.id >= id) id = v.id + 1;
  });
  return id;
}
