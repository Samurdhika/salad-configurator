import type { Ingredient } from "../types";
import type { PriceListItem } from "../types";

export const calculateTotalWeight = (ingredients: Ingredient[]): number => {
  return ingredients.reduce((sum, item: any) => {
    return sum + (item.weight_grams || 0);
  }, 0);
};

export const calculateTotalPrice = (ingredients: Ingredient[], prices: PriceListItem[]): number => {
  return ingredients.reduce((sum, item) => {
    const priceEntry = prices.find((p) => p.item_id === item.id);
    const price = priceEntry ? priceEntry.price : 0;
    return sum + price;
  }, 0);
};