import type { Ingredient } from "../types";
import { useIngredientStore } from "../store/useIngredientStore";
import { useAuthStore } from "../store/useAuthStore";
import { usePriceStore } from "../store/usePriceStore";

interface Props {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: Props) {
  const addIngrediant = useIngredientStore((state) => state.addIngredient);
  const token = useAuthStore((state) => state.token);
  const prices = usePriceStore((state) => state.prices);
  const dietLabels: Record<string, string> = {
    G: "Gluten-free",
    L: "Lactose-free",
    V: "Vegan",
  };

  const priceItem = prices.find(
    (p) => p.item_id === ingredient.id
  );

  return (
    <div 
    onClick={() => addIngrediant(ingredient)}
    className="w-25 h-20 bg-white rounded-xl shadow-md p-3 flex flex-col justify-between hover:shadow-lg transition">
      
      
      <div className="flex items-center gap-3">
  <img
    src={ingredient.image_url}
    alt={ingredient.name}
    className="w-16 h-16 object-cover rounded-md"
  />

  <div className="flex flex-col justify-center">
    <span className="text-sm font-semibold text-gray-800">
      {ingredient.name}
    </span>

    <span className="text-xs text-gray-600">
      {!token
        ? "Login to see price"
        : priceItem
        ? `+ ${priceItem.price.toFixed(2)} €`
        : null}
    </span>

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
</div>

      
      
      
    </div>
  );
}