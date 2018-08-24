import { ADD_HEALTH, REMOVE_HEALTH } from '../constants';

export const addHealth = health => ({
  type: ADD_HEALTH,
  health
});

export const removeHealth = health => ({
  type: REMOVE_HEALTH,
  health
});
