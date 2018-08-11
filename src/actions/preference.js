import { ADD_PREFERENCE, REMOVE_PREFERENCE } from '../constants';

export const addPreference = text => ({
  type: ADD_PREFERENCE,
  text
});

export const removePreference = id => ({
  type: REMOVE_PREFERENCE,
  id
});
