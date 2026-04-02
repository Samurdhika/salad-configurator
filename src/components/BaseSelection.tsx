import React from "react";
import type { Ingredient } from "../types";

interface Props {
  ingredients: Ingredient[];
}

export function BaseSelection({ ingredients }: Props) {
  // Filter out only the ingredients that belong to the base category (categoryId === 6)
  const bases = ingredients.filter((item) => item.categoryId === 6);

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
        2.
      </div>
      <h2 className="font-semibold text-lg mb-6">Valitse salaattipohja</h2>
      
      <div className="w-full flex flex-col gap-4">
        {/* Use .map() to render the filtered bases dynamically */}
        {bases.map((base) => (
          <div
            key={base.id}
            className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4 hover:border-[#A2D135] cursor-pointer transition-colors"
          >
            <img
            src={base.image_url}
            alt={base.name}
            className="h-8 w-8 object-contain" />
            <span>{base.name}</span>
          </div>
        ))}

        {/* Fallback in case no ingredients match category 6 */}
        {bases.length === 0 && (
          <p className="text-gray-500 text-xs text-center italic">Ei saatavilla olevia pohjia.</p>
        )}
      </div>
    </div>
  );
}