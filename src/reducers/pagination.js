import {
  FIRST_PAGE,
  NEXT_PAGE,
  NEXT_HEALTHY_PAGE,
  NEXT_SPECIAL_PAGE,
  PREV_PAGE,
  PREV_HEALTHY_PAGE,
  PREV_SPECIAL_PAGE
} from '../constants';

const initialState = {
  profile: 0,
  healthyRecipes: 0,
  specialDiets: 0
};

const curPage = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return initialState;
    case NEXT_PAGE:
      return {
        ...state,
        profile: action.payload
      };
    case PREV_PAGE:
      return {
        ...state,
        profile: action.payload
      };
    case NEXT_HEALTHY_PAGE:
      return {
        ...state,
        healthyRecipes: action.payload
      };
    case PREV_HEALTHY_PAGE:
      return {
        ...state,
        healthyRecipes: action.payload
      };
    case NEXT_SPECIAL_PAGE:
      return {
        ...state,
        specialDiets: action.payload
      };
    case PREV_SPECIAL_PAGE:
      return {
        ...state,
        specialDiets: action.payload
      };
    default:
      return state;
  }
};

export default curPage;
