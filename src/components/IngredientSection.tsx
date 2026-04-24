import React, { useState } from "react";
import type { Category, Ingredient } from "../types";
import { IngredientCard } from "./IngredientCard";
import { useIngredientStore } from "../store/useIngredientStore";

type IngredientSectionProps = {
  categories: Category[];
  ingredients: Ingredient[];
};

export function IngredientSection({
  categories,
  ingredients,
}: IngredientSectionProps) {
  
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const { baseType } = useIngredientStore();

 
  const salaattiCategoryIds = [5, 6, 7, 8, 9];
  const rahkaCategoryIds = [1, 2, 3, 4];

  
  const filteredCategories = categories.filter((category) => {
    if (baseType === 1) return salaattiCategoryIds.includes(category.id);
    if (baseType === 2) return rahkaCategoryIds.includes(category.id);
    return true;
  });

  
  const filteredIngredients = ingredients.filter((ingredient) => {
    if (baseType === 1) return salaattiCategoryIds.includes(ingredient.categoryId);
    if (baseType === 2) return rahkaCategoryIds.includes(ingredient.categoryId);
    return true;
  });

  
  const visibleIngredients = filteredIngredients.filter((ingredient) => {
    const matchesCategory =
      activeCategory === "all" ||
      Number(activeCategory) === ingredient.categoryId;

    const matchesSearch = ingredient.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      
      
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
          3.
        </div>
        <h2 className="text-lg font-semibold">
          Lisää raaka-aineet
        </h2>
      </div>

      
      <div className="flex gap-4 items-center overflow-x-auto justify-center">

        
        <input
          type="text"
          placeholder="Etsi tuotteita"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-full px-6 py-3 text-black w-64"
        />

        

      
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => setActiveCategory(String(category.id))}
            className={`px-6 py-2 rounded-full font-bold cursor-pointer ${
              activeCategory === String(category.id)
                ? "bg-white text-black"
                : "bg-[#A2D135] text-black"
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {visibleIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
      </div>

      
      <div className="mt-10 flex justify-center">
        <div className="bg-zinc-700/40 rounded-full px-6 py-3 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <span className="bg-[#A2D135] text-black w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
              G
            </span>
            <span>gluteeniton</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#A2D135] text-black w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
              L
            </span>
            <span>laktoositon</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#A2D135] text-black w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
              VL
            </span>
            <span>vähälaktoosinen</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#A2D135] text-black w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
              V
            </span>
            <span>soveltuu vegaaniseen ruokavalioon</span>
          </div>

        </div>
      </div>
    </div>
  );
}