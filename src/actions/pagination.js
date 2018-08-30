import { FIRST_PAGE, NEXT_PAGE } from '../constants';

export const firstPage = () => ({
  type: FIRST_PAGE,
  payload: 0
});

export const nextPage = page => ({
  type: NEXT_PAGE,
  payload: page
});
