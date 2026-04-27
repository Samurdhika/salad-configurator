import React from "react";
import type { BaseType, Ingredient } from "../types"; // Added Ingredient type
import { useIngredientStore } from "../store/useIngredientStore";

interface Props {
  BaseType: BaseType[];
}

export function BaseSelection({ BaseType }: Props) {
  const baseType = useIngredientStore((state) => state.baseType);
  const setBaseType = useIngredientStore((state) => state.setBaseType);
  
  // Get slots and addIngredient from store
  const slots = useIngredientStore((state) => state.slots);
  const addIngredient = useIngredientStore((state) => state.addIngredient);

  const showBases = baseType === 1;

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
        2.
      </div>

      <h2 className="font-semibold text-lg mb-6">Valitse salaattipohja</h2>
      
      <div className="w-full flex flex-col gap-4 min-h-[300px]">
        {showBases ? (
          BaseType.map((base) => {
            // Check if this base is the one currently in the 'base' slot
            // Assuming BaseType objects can be treated as Ingredients for category 6
            const isActive = slots.base?.id === base.id;

            return (
              <div
                key={base.id}
                // onClick handler to set the base in the store
                onClick={() => addIngredient(base as unknown as Ingredient)}
                className={`h-12 border-2 rounded-xl flex items-center px-4 cursor-pointer transition-colors
                  ${isActive 
                    ? "border-[#A2D135] bg-zinc-700" 
                    : "border-gray-600 hover:border-[#A2D135]"
                  }`}
              >
                <img
                  src={base.image_url}
                  alt={base.name}
                  className="h-8 w-8 object-contain mr-3"
                />
                <span className={isActive ? "text-[#A2D135] font-semibold" : ""}>
                  {base.name}
                </span>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm italic text-center mt-10">
            <div className="w-full flex flex-col gap-4">
              <p className="text-gray-500 text-sm text-center italic">
                Ei saatavilla olevia pohjia.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}