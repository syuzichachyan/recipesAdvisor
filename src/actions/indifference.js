import { ADD_INDIFFERENCE, REMOVE_INDIFFERENCE } from '../constants';

export const addIndifference = text => ({
  type: ADD_INDIFFERENCE,
  text
});

export const removeIndifference = id => ({
  type: REMOVE_INDIFFERENCE,
  id
});
