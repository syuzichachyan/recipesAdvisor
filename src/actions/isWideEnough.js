import { IS_WIDE_ENOUGH } from '../constants';

const isWIdeEnough = (bool) => ({
  type: IS_WIDE_ENOUGH,
  payload: bool
});

export default isWIdeEnough;