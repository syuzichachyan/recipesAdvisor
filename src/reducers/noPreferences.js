import { CHANGE_NO_PREFERENCES } from '../constants';

const noPreferences = (state = false, action) => {
  switch (action.type) {
    case CHANGE_NO_PREFERENCES:
      return !state;
    default:
      return state;
  }
};

export default noPreferences;
