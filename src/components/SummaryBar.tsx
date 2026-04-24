import { Link } from "react-router-dom";
import { useIngredientStore } from "../store/useIngredientStore";
import type { Ingredient } from "../types";
import {
  calculateTotalWeight,
  calculateTotalPrice,
} from "../utils/calculations";
import { usePriceStore } from "../store/usePriceStore";

export function SummaryBar() {
  const slots = useIngredientStore((state) => state.slots);
  const clearSlot = useIngredientStore((state) => state.clearSlot);
  const prices = usePriceStore((state) => state.prices);

  
  const entries = Object.entries(slots) as [string, Ingredient | null][];

  const activeEntries = entries.filter(
    ([_, item]) => item !== null
  ) as [string, Ingredient][];

  const activeIngredients = activeEntries.map(([_, item]) => item);

  const totalWeight = calculateTotalWeight(activeIngredients);
  const totalPrice = calculateTotalPrice(activeIngredients, prices);

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">

     
      <div className="flex-1 bg-[#4a4a4a] rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
        
        <div>
          <p className="text-lg font-semibold mb-3">
            Valitut ainesosat ({activeEntries.length})
          </p>

          <div className="flex flex-wrap gap-2">
            {activeEntries.map(([slotKey, item]) => (
              <div
                key={slotKey}
                className="flex items-center gap-2 bg-zinc-700 px-3 py-1 rounded-full text-sm"
              >
                <span>{item.name}</span>

                
                <button
                  onClick={() => clearSlot(slotKey)}
                  className="text-red-400 hover:text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <Link to="/print">
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 hover:border-4 hover:border-lime-500 transition mt-4">
            Tulosta resepti ja tilauspohja
          </button>
        </Link>
      </div>

      
      <div className="flex-1 grid grid-cols-2 gap-6 place-items-center">
        
        <Stat value={`${totalWeight} g`} label="Arvioitu paino" />
        
        <Stat value={`${totalPrice.toFixed(2)} €`} label="Arvioitu hinta" />
        
        <Stat value="0,00 €" label="MH" />
        <Stat value="0 %" label="Kate" />
      </div>
    </div>
  );
}


function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-white text-black font-bold text-lg py-2 px-6 rounded-full border-4 border-lime-400 shadow-md w-32 text-center">
        {value}
      </div>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}