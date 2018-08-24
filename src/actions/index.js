import { getRecipes, favouriteRecipe } from './recipes';
import { getHealthyRecipes, favouriteHealthyRecipe } from './healthyRecipes';
import { getSpecialDiets, favouriteSpecialRecipe } from './specialDiets';
import { addPreference, removePreference } from './preferences';
import { addDiet, removeDiet } from './filterDiets';
import { addHealth, removeHealth } from './filterHealths';
import {
  firstPage,
  nextPage,
  nextHealthyPage,
  nextSpecialPage,
  prevPage,
  prevHealthyPage,
  prevSpecialPage
} from './pagination';
import { addToFavourites, removeFromFavourites } from './favourites';

export {
  getRecipes,
  favouriteRecipe,
  getHealthyRecipes,
  favouriteHealthyRecipe,
  getSpecialDiets,
  favouriteSpecialRecipe,
  firstPage,
  nextPage,
  nextHealthyPage,
  nextSpecialPage,
  prevPage,
  prevHealthyPage,
  prevSpecialPage,
  addToFavourites,
  removeFromFavourites,
  addPreference,
  removePreference,
  addDiet,
  removeDiet,
  addHealth,
  removeHealth
};
