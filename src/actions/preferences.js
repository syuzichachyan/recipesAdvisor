import { ADD_PREFERENCE, REMOVE_PREFERENCE } from '../constants';

export const addPreference = pref => ({
  type: ADD_PREFERENCE,
  pref
});

export const removePreference = id => ({
  type: REMOVE_PREFERENCE,
  payload: { id }
});
