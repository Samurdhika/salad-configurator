import type { Ingredient } from "../types";

export const calculateTotalWeight = (ingredients: Ingredient[]): number => {
  return ingredients.reduce((sum, item: any) => {
    return sum + (item.weight_grams || 0);
  }, 0);
};