import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

type Recipe = {
  id: number;
  name: string;
  is_public: boolean;
  bowl_id: number;
  ingredient_ids: number[];
  slots: Record<
    string,
    {
      id: number;
      name: string;
      image_url: string;
    }
  >;
  created_at: string;
};

// Mock data for stars and attributes since they aren't in the current API schema
const MOCK_ATTRIBUTES = ["laktoositon", "runsaasti proteiinia"];

export function Community() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch('https://fresse-api.onrender.com/api/recipes');
        const data = await res.json();
        // Filter for public recipes only
        setRecipes(data.filter((r: Recipe) => r.is_public));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse text-gray-500">Ladataan...</p>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-white p-8">
      <Header />
      <div className="flex-1 p-8 pt-10">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-xl font-bold mb-6">Tallennetut reseptit</h1>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-[#94AD46] text-black rounded-full text-sm font-medium">Omat reseptit</button>
          <button className="px-6 py-2 bg-[#B5E64B] text-black rounded-full text-sm font-medium">Yhteisön reseptit</button>
          <button className="px-6 py-2 bg-[#B5E64B] text-black rounded-full text-sm font-medium flex items-center gap-2">
            <span>🤍</span> Suosikit
          </button>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {recipes.map((recipe) => {
          const slots = Object.values(recipe.slots);
          
          return (
            <div
              key={recipe.id}
              className="bg-[#333333] text-white rounded-[50px] p-6 flex items-center gap-6 shadow-lg min-h-[220px]"
            >
              {/* Circular Bowl with Partitions */}
              <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#444] grid grid-cols-2 grid-rows-3 rotate-45">
                {slots.slice(0, 6).map((slot, idx) => (
                  <div key={idx} className="relative overflow-hidden border-[1px] border-[#333]">
                    <img
                      src={slot.image_url}
                      alt={slot.name}
                      className="w-full h-full object-cover -rotate-45 scale-150"
                    />
                  </div>
                ))}
              </div>

              {/* Recipe Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400 text-sm">
                    {"⭐".repeat(5)}
                  </div>
                  <span className="text-[10px] text-gray-400">(9) Arvioi resepti</span>
                </div>

                <h2 className="font-bold text-md mb-1">{recipe.name} 289g</h2>
                <p className="text-[10px] text-gray-400 mb-3">Valmistettu 3 päivää sitten</p>

                <ul className="text-xs space-y-1 mb-4">
                  {MOCK_ATTRIBUTES.map((attr, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full"></span>
                      {attr}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <button className="text-[#B5E64B] text-sm font-bold flex items-center gap-1">
                    {'>'} Avaa resepti
                  </button>
                  <div className="flex gap-3 text-gray-400">
                    <span className="cursor-pointer hover:text-white">🗑️</span>
                    <span className="cursor-pointer hover:text-white">🤍</span>
                    <span className="cursor-pointer hover:text-white">:</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      <Footer />
    </div>
    
  );
}