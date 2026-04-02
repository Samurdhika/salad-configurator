import type { Ingredient } from "../types";

interface Props {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: Props) {
  const dietLabels: Record<string, string> = {
    G: "Gluten-free",
    L: "Lactose-free",
    V: "Vegan",
  };

  return (
    <div className="w-32 h-32 bg-white rounded-xl shadow-md p-3 flex flex-col justify-between hover:shadow-lg transition">
      
      
      <div className="text-sm font-semibold text-gray-800">
        {ingredient.name}
      </div>

      
      {ingredient.diets && ingredient.diets.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {ingredient.diets.map((diet, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
            >
              {dietLabels[diet] ?? diet}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}