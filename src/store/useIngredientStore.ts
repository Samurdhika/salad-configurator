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
  clearSlot: (slotKey:string) => void;

  loadRecipe: (recipe: any, allBowls: Bowl[]) => void;
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

  addIngredient: (item) =>
    set((state) => {
      
      if (item.categoryId === 6) {
        return {
          slots: { ...state.slots, base: item },
        };
      }

      const slotCount = state.selectedBowl?.slot_count || 0;

      for (let i = 1; i <= slotCount; i++) {
        const slotKey = `slot-${i}`;

        if (!state.slots[slotKey]) {
          return {
            slots: { ...state.slots, [slotKey]: item },
          };
        }
      }

      return state;
    }),

  removeIngredient: (id) =>
    set((state) => {
      const newSlots = { ...state.slots };

      const key = Object.keys(newSlots).find(
        (k) => newSlots[k]?.id === id
      );

      if (key) {
        delete newSlots[key];
      }

      return { slots: newSlots };
    }),

    clearSlot: (slotKey) =>
      set((state) => ({
        slots: {
          ...state.slots,
          [slotKey]: null,
        },
      })),
      loadRecipe: (recipe, allBowls) =>
    set(() => {
      // 1. Find the correct bowl object from the provided list
      const targetBowl = allBowls.find((b) => b.id === recipe.bowl_id);

      // 2. Prepare the slots. We ensure the keys match your 'slot-X' format
      const newSlots: Record<string, Ingredient | null> = {};
      
      if (recipe.slots) {
        Object.entries(recipe.slots).forEach(([key, value]) => {
          // Mapping the API data to the Ingredient type used in the store
          newSlots[key] = value as Ingredient;
        });
      }

      return {
        selectedBowl: targetBowl || null,
        // If targetBowl exists, update baseType to match that bowl's base_type_id
        baseType: targetBowl ? targetBowl.base_type_id : 1,
        slots: newSlots,
      };
    }),
}));