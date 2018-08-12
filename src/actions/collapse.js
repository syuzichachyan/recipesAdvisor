import { COLLAPSE } from '../constants';

const collapse = (bool) => ({
  type: COLLAPSE,
  payload: bool
});

export default collapse;