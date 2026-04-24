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
  clearSlot: (slotId: string) => void;
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
    set(() => {
      const initialSlots: Record<string, Ingredient | null> = {};
      for (let i = 1; i <= bowl.slot_count; i++) {
        initialSlots[`slot-${i}`] = null;
      }
      return {
        selectedBowl: bowl,
        slots: initialSlots,
      };
    }),

  clearSelection: () =>
    set((state) => {
      const resetSlots: Record<string, Ingredient | null> = {};
      if (state.selectedBowl) {
        for (let i = 1; i <= state.selectedBowl.slot_count; i++) {
          resetSlots[`slot-${i}`] = null;
        }
      }
      return { slots: resetSlots, selectedBowl: state.selectedBowl };
    }),

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

  clearSlot: (slotId) =>
    set((state) => ({
      slots: { ...state.slots, [slotId]: null },
    })),

  removeIngredient: (id) =>
    set((state) => {
      const newSlots = { ...state.slots };
      const key = Object.keys(newSlots).find(
        (k) => newSlots[k]?.id === id
      );

      if (key) {
        newSlots[key] = null;
      }

      return { slots: newSlots };
    }),
}));