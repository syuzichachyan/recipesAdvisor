import { ADD_DIET, REMOVE_DIET } from '../constants';

export const addDiet = diet => ({
  type: ADD_DIET,
  diet
});

export const removeDiet = diet => ({
  type: REMOVE_DIET,
  diet
});
