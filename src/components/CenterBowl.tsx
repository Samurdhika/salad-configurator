import React from "react";
import { useIngredientStore } from "../store/useIngredientStore"; 
import { TrashIcon, ArrowUturnLeftIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

export function CenterBowl(){
    const { baseType, setBaseType,clearSelection,clearSlot, slots, selectedBowl } = useIngredientStore(); 
 
    const wedgePositions6: Record<string, string> = {
      "slot-1": "top-4 left-1/2 -translate-x-1/2",
      "slot-2": "top-16 right-8",
      "slot-3": "bottom-16 right-8",
      "slot-4": "bottom-4 left-1/2 -translate-x-1/2",
      "slot-5": "bottom-16 left-8",
      "slot-6": "top-16 left-8",
    }

    const wedgePositions4: Record<string, string> = {
      "slot-1": "top-10 left-20 -translate-x-1/2",
      "slot-2" : "top-10 right-3 -translate-x-1/2",
      "slot-3": "bottom-16 right-8",
      "slot-4": "bottom-16 left-8",
    }

    const slotCount = selectedBowl?.slot_count ?? 6;
    const wedgePositions = slotCount === 4 ? wedgePositions4 : wedgePositions6;

    const renderedIngredients = Object.entries(slots).map(
    ([slotKey, ingredient]) => {
      if (!ingredient || slotKey === "base") return null;

      return (
        <div
          key={slotKey}
          className={`absolute z-30 ${wedgePositions[slotKey]}`}
        >
          <img
            src={ingredient.wedge_image_url}
            alt={ingredient.name}
            className="w-20 h-20 object-contain"
          />

          <button
            onClick={() => clearSlot(slotKey)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
          >
            X
          </button>
        </div>
      );
    }
  );

    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0 ">
        <div className="flex gap-3 mb-6 items-center ">
            <button 
                onClick={() => setBaseType(1)} 
                className={`${baseType === 1 ? 'border-4 border-[#6B8E24]' : ''} bg-[#A2D135] gap-3 mb-6 items-center text-black rounded-full font-sans text-s p-2.5 font-bold hover:border-4 hover:border-[#6B8E24]`}
            >
                Salaatti
            </button>
            <button 
                onClick={() => setBaseType(2)} 
                className={`${baseType === 2 ? 'border-4 border-[#6B8E24]' : ''} bg-[#A2D135] gap-3 mb-6 items-center text-black rounded-full font-sans text-s p-2.5 font-bold hover:border-4 hover:border-[#6B8E24]`}
            >
                Rahka
            </button>
            <div className="flex gap-3 mb-6 items-center">
                <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                    onClick = {() => {
                        const confirmed = window.confirm('Are you sure you want to empty the bowl?');
                        if (confirmed) {
                            clearSelection();
                        }
                    }}
                    >
                    <TrashIcon className="w-5 h-5 text-black" />
                </button>
                <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                    onClick={() => alert('Feature coming soon!')}
                >
                    <ArrowUturnLeftIcon className="w-5 h-5 text-black" />
                </button>
                <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                    onClick={() => alert('Feature coming soon!')}
                >
                    <ArchiveBoxIcon className="w-5 h-5 text-black" />
                </button>
            </div>
        </div>

      <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 shadow-inner relative overflow-hidden">
        {slots.base && (
          <img
            src={slots.base.image_url}
            alt={slots.base.name}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}

        {selectedBowl?.slot_count === 6 && (
          <img
            src="https://www.cc.puv.fi/~asa/fresh/images/jakaja_6_lohkoa.png"
            alt="6 compartments"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
        )}

        {selectedBowl?.slot_count === 4 && (
          <img
            src="https://www.cc.puv.fi/~asa/fresh/images/jakaja_4_lohkoa.png"
            alt="4 compartments"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
        )}

        <div className="absolute inset-0">
          {renderedIngredients}
        </div>
      </div>

        <div className="mt-6 flex items-center gap-80 text-gray-700">
            <span>100 g / 1,99 €</span>
            <span>{selectedBowl ? selectedBowl.volume : 0} ml</span>
        </div>
    </div>
    );
    
};