import type { Ingredient, PriceListItem, Bowl } from "../types";

export const calculateTotalWeight = (ingredients: Ingredient[]): number => {
  return ingredients.length * 100; 
};

export const calculateTotalPrice = (
  ingredients: Ingredient[],
  priceList: PriceListItem[],
  selectedBowl: Bowl | null
): number => {
  const bowlPrice = selectedBowl?.price || 0;

  const ingredientsPrice = ingredients.reduce((total, ingredient) => {
    const priceItem = priceList.find((p) => String(p.item_id) === String(ingredient.id));
    
    if (priceItem) {
      return total + Number(priceItem.price);
    }
    return total;
  }, 0);

  return bowlPrice + ingredientsPrice;
};