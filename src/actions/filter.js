import {
  ADD_HEALTH_LABEL,
  ADD_DIET_LABEL,
  REMOVE_FILTER_LABEL
} from '../constants';

export const addHealthLabel = label => ({
  type: ADD_HEALTH_LABEL,
  label
});

export const addDietLabel = label => ({
  type: ADD_DIET_LABEL,
  label
});

export const removeLabel = label => ({
  type: REMOVE_FILTER_LABEL,
  label
});
