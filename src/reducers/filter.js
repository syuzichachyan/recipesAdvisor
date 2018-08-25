import {
  ADD_HEALTH_LABEL,
  ADD_DIET_LABEL,
  REMOVE_FILTER_LABEL
} from '../constants';

export default (state = { type: '', labels: [] }, action) => {
  switch (action.type) {
    case ADD_HEALTH_LABEL:
      if (state.type === 'health') {
        state.labels.push(action.label);
      } else {
        state.type = 'health';
        state.labels = [];
        state.labels.push(action.label);
      }
      return { ...state };
    case ADD_DIET_LABEL:
      if (state.type === 'diet') {
        state.labels.push(action.label);
      } else {
        state.type = 'diet';
        state.labels = [];
        state.labels.push(action.label);
      }
      return { ...state };
    case REMOVE_FILTER_LABEL:
      state.labels.splice(state.labels.indexOf(action.label), 1);
      return { ...state };
    default:
      return state;
  }
};
