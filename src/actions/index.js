import { getRecipes, favouriteRecipe } from './recipes';
import { getHealthyRecipes, favouriteHealthyRecipe } from './healthyRecipes';
import { getSpecialDiets, favouriteSpecialRecipe } from './specialDiets';
import { getRandomRecipes } from './randomRecipes';
import { addPreference, removePreference } from './preferences';
import { addHealthLabel, addDietLabel, removeLabel } from './filter';
import {
  firstPage,
  nextPage,
  nextHealthyPage,
  nextSpecialPage,
  prevPage,
  prevHealthyPage,
  prevSpecialPage
} from './pagination';

export {
  getRecipes,
  favouriteRecipe,
  getHealthyRecipes,
  favouriteHealthyRecipe,
  getSpecialDiets,
  favouriteSpecialRecipe,
  getRandomRecipes,
  firstPage,
  nextPage,
  nextHealthyPage,
  nextSpecialPage,
  prevPage,
  prevHealthyPage,
  prevSpecialPage,
  addPreference,
  removePreference,
  addHealthLabel,
  addDietLabel,
  removeLabel
};
