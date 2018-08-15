import { FIRST_PAGE ,NEXT_PAGE, NEXT_HEALTHY_PAGE, PREV_PAGE, PREV_HEALTHY_PAGE } from '../constants';

export const firstPage = () => ({
  type: FIRST_PAGE,
  payload: 0
});

export const nextPage = (page) => ({
  type: NEXT_PAGE,
  payload: page
});

export const prevPage = (page) => ({
  type: PREV_PAGE,
  payload: page
});

export const nextHealthyPage = (page) => ({
  type: NEXT_HEALTHY_PAGE,
  payload: page
});

export const prevHealthyPage = (page) => ({
  type: PREV_HEALTHY_PAGE,
  payload: page
});