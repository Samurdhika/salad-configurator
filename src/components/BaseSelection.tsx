import React from "react";
import type { BaseType } from "../types";
import { useIngredientStore } from "../store/useIngredientStore";

interface Props {
  BaseType: BaseType[];
}

export function BaseSelection({ BaseType }: Props) {
  const baseType = useIngredientStore((state) => state.baseType);
  const setBaseType = useIngredientStore((state) => state.setBaseType);

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
      
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
        2.
      </div>

      <h2 className="font-semibold text-lg mb-6">
        Valitse salaattipohja
      </h2>

      <div className="w-full flex flex-col gap-4">
        {BaseType.map((base) => {
          const isActive = baseType === base.id;

          return (
            <div
              key={base.id}
              onClick={() => setBaseType(base.id)}
              className={`h-12 border-2 rounded-xl flex items-center px-4 cursor-pointer transition
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
        })}

        {BaseType.length === 0 && (
          <p className="text-gray-500 text-xs text-center italic">
            Ei saatavilla olevia pohjia.
          </p>
        )}
      </div>
    </div>
  );
}