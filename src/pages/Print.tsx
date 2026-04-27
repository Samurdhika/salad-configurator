import React from 'react';
import { useIngredientStore } from '../store/useIngredientStore';
import { usePriceStore } from '../store/usePriceStore';
import { calculateTotalWeight, calculateTotalPrice } from '../utils/calculations';
import { type Ingredient } from '../types';

export function Print() {
  const { slots, selectedBowl } = useIngredientStore();
  const { prices } = usePriceStore();

  const activeIngredients = Object.values(slots).filter(
    (item): item is Ingredient => item !== null
  );

  const totalWeight = calculateTotalWeight(activeIngredients);
  const totalPrice = calculateTotalPrice(activeIngredients, prices, selectedBowl);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-10">
      {/* Control Panel - Hidden when printing */}
      <div className="max-w-2xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <button 
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-black"
        >
          ← Takaisin
        </button>
        <button 
          onClick={handlePrint}
          className="bg-[#B5E64B] text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#94AD46] transition"
        >
          Tulosta kuitti
        </button>
      </div>

      {/* The Receipt Structure */}
      <div className="max-w-xl mx-auto bg-white p-8 shadow-2xl border-t-8 border-[#B5E64B] print:shadow-none print:border-black print:p-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tighter">FRESSE</h1>
          <p className="text-gray-500 text-sm">Resepti ja tilausvahvistus</p>
          <div className="border-b-2 border-dashed border-gray-200 my-4" />
        </div>

        {/* Bowl Details */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">Valittu rasia:</h2>
          <p className="text-xl">{selectedBowl?.name || "Ei valittua rasiaa"}</p>
        </div>

        {/* Ingredient List */}
        <div className="mb-8">
          <h2 className="font-bold text-lg mb-4">Ainekset:</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-400 text-sm">
                <th className="py-2">Tuote</th>
                <th className="py-2 text-right">Määrä</th>
              </tr>
            </thead>
            <tbody>
              {activeIngredients.map((item) => (
                <tr key={item.id} className="border-b border-gray-50">
                  <td className="py-3 font-medium">{item.name}</td>
                  <td className="py-3 text-right">1 kpl</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="bg-gray-50 p-6 rounded-2xl print:bg-white print:border">
          <div className="flex justify-between mb-2">
            <span>Kokonaispaino:</span>
            <span className="font-bold">{totalWeight} g</span>
          </div>
          <div className="flex justify-between text-2xl font-black border-t pt-4 border-gray-200">
            <span>YHTEENSÄ:</span>
            <span>{totalPrice.toFixed(2)} €</span>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-400">
          <p>Kiitos tilauksesta! / fresse.fi</p>
          <p className="mt-2">{new Date().toLocaleString('fi-FI')}</p>
        </div>
      </div>
    </div>
  );
}