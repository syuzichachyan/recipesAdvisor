import { ADD_INDIFFERENCE, REMOVE_INDIFFERENCE } from '../constants';

const indifference = (state = [], action) => {
  switch (action.type) {
    case ADD_INDIFFERENCE:
      return [
        ...state,
        {
          id: idGen(state),
          text: action.text
        }
      ];
    case REMOVE_INDIFFERENCE:
      return state.filter((v, i) => {
        if (v.id === action.id) return false;
        return true;
      });
    default:
      return state;
  }
};

export default indifference;

function idGen(state) {
  let id = 1;
  state.forEach(v => {
    if (v.id >= id) id = v.id + 1;
  });
  return id;
}
