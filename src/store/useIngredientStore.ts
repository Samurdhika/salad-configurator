import { create } from "zustand";
import type { Ingredient, Bowl } from "../types";

interface IngredientStore {
  slots: Record<string, Ingredient | null>;

  baseType: number;
  selectedBowl: Bowl | null;

  setBaseType: (id: number) => void;
  setBowl: (bowl: Bowl) => void;
  clearSelection: () => void;

  addIngredient: (item: Ingredient) => void;
  removeIngredient: (id: number) => void;
}

export const useIngredientStore = create<IngredientStore>((set) => ({
  slots: {},
  baseType: 1,
  selectedBowl: null,

  setBaseType: (id) =>
    set(() => ({
      baseType: id,
      selectedBowl: null,
      slots: {},
    })),

  setBowl: (bowl) =>
    set(() => ({
      selectedBowl: bowl,
      slots: {},
    })),

  clearSelection: () =>
    set(() => ({
      slots: {},
      selectedBowl: null,
    })),

  addIngredient: (item) => set((state) => ({
    slots: { ...state.slots, [item.categoryId.toString()]: item }
  })),
  removeIngredient: (id) => set((state) => {
    const newSlots = { ...state.slots };
    const key = Object.keys(newSlots).find(k => newSlots[k]?.id === id);
    if (key) delete newSlots[key];
    return { slots: newSlots };
  }),
}));