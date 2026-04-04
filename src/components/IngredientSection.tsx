import React, { useState } from "react";
import type { Category, Ingredient } from "../types";
import { IngredientCard } from "./IngredientCard";

type IngredientSectionProps = {
  categories: Category[];
  ingredients: Ingredient[];
};

export function IngredientSection({
  categories,
  ingredients,
}: IngredientSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = categories.filter((cat) => cat.id !== 6);

  const filteredIngredients = ingredients.filter(
    (ing) => ing.categoryId !== 6
  );

  const visibleIngredients =
    activeCategory === "all"
      ? filteredIngredients
      : filteredIngredients.filter(
          (ing) => String(ing.categoryId) === activeCategory
        );

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
          3.
        </div>
        <h2 className="text-lg font-semibold mb-6">
          Lisää raaka-aineet
        </h2>
      </div>

      <div className="flex gap-4 items-center overflow-x-auto justify-center">
        <input
          type="text"
          placeholder="Etsi tuotteita"
          className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135] mb-6"
        />

        {/* ALL BUTTON */}
        <div
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-2 rounded-full font-bold cursor-pointer ${
            activeCategory === "all"
              ? "bg-white text-black"
              : "bg-[#A2D135] text-black"
          }`}
        >
          All
        </div>

        {/* CATEGORY BUTTONS */}
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
    </div>
  );
}