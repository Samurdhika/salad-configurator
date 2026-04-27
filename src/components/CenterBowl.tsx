import React, { useState } from "react";
import { useIngredientStore } from "../store/useIngredientStore";
import { TrashIcon, ArrowUturnLeftIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { SaveRecipeModal } from "./SaveRecipeModal"; 

export function CenterBowl() {
  const {
    baseType,
    setBaseType,
    clearSelection,
    clearSlot,
    slots,
    selectedBowl
  } = useIngredientStore();

  
  const [isSaveOpen, setIsSaveOpen] = useState(false);

  const wedgePositions6: Record<string, string> = {
    "slot-1": "top-4 left-1/2 -translate-x-1/2",
    "slot-2": "top-16 right-8",
    "slot-3": "bottom-16 right-8",
    "slot-4": "bottom-4 left-1/2 -translate-x-1/2",
    "slot-5": "bottom-16 left-8",
    "slot-6": "top-16 left-8",
  };

  const wedgePositions4: Record<string, string> = {
    "slot-1": "top-5 left-3",
    "slot-2": "top-6 right-5",
    "slot-3": "bottom-4 right-3",
    "slot-4": "bottom-5 left-2",
  };

  const rotationDegrees: Record<string, string> = {
    "slot-1": "rotate-0",
    "slot-2": "rotate-[60deg]",
    "slot-3": "rotate-[120deg]",
    "slot-4": "rotate-180",
    "slot-5": "rotate-[240deg]",
    "slot-6": "rotate-[300deg]",
  };

  const rotationDegrees4: Record<string, string> = {
    "slot-1": "rotate-[315deg]",
    "slot-2": "rotate-[45deg]",
    "slot-3": "rotate-[135deg]",
    "slot-4": "rotate-[225deg]",
  };

  const slotCount = selectedBowl?.slot_count ?? 6;
  const wedgePositions = slotCount === 4 ? wedgePositions4 : wedgePositions6;

  const activeRotations = slotCount === 4 ? rotationDegrees4 : rotationDegrees;

  const renderedIngredients = Object.entries(slots).map(
    ([slotKey, ingredient]) => {
      if (!ingredient || slotKey === "base") return null;

      return (
        <div key={slotKey} className={`absolute z-30 flex flex-col items-center justify-center ${wedgePositions[slotKey]} ${activeRotations[slotKey] || ""}`}>
          <img
            src={ingredient.wedge_image_url}
            alt={ingredient.name}
            className="w-32 h-32 object-contain scale-110 transition-transform duration-500 mt-[-10%]"
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
    <>
      <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">

        
        <div className="flex gap-3 mb-6 items-center">
          <button
            onClick={() => setBaseType(1)}
            className={`${baseType === 1 ? "border-4 border-[#6B8E24]" : ""} bg-[#A2D135] text-black rounded-full font-bold p-2.5`}
          >
            Salaatti
          </button>

          <button
            onClick={() => setBaseType(2)}
            className={`${baseType === 2 ? "border-4 border-[#6B8E24]" : ""} bg-[#A2D135] text-black rounded-full font-bold p-2.5`}
          >
            Rahka
          </button>

          <div className="flex gap-3 items-center">
            
            <button
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              onClick={() => {
                const confirmed = window.confirm("Empty the bowl?");
                if (confirmed) clearSelection();
              }}
            >
              <TrashIcon className="w-5 h-5 text-black" />
            </button>

           
            <button
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              onClick={() => alert("Feature coming soon!")}
            >
              <ArrowUturnLeftIcon className="w-5 h-5 text-black" />
            </button>

            
            <button
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              onClick={() => setIsSaveOpen(true)}
            >
              <ArchiveBoxIcon className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        
        <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 shadow-inner relative overflow-hidden flex items-center justify-center">

          {selectedBowl && (
            <img
              src={selectedBowl.image_url}
              alt={selectedBowl.name}
              className="absolute inset-0 w-full h-full object-contain z-0"
            />
          )}
        
          {slots.base && (
       <div className="absolute inset-0 flex items-center justify-center z-10">
       <div className="w-[85%] h-[85%] rounded-full overflow-hidden">
       <img
        src={slots.base.image_url}
        alt={slots.base.name}
        className="w-full h-full object-cover opacity-90"
      />
    </div>
  </div>
)}

          {selectedBowl?.slot_count === 6 && (
            <img
              src="https://www.cc.puv.fi/~asa/fresh/images/jakaja_6_lohkoa.png"
              className="absolute inset-0 w-full h-full object-contain z-20"
            />
          )}

          {selectedBowl?.slot_count === 4 && (
            <img
              src="https://www.cc.puv.fi/~asa/fresh/images/jakaja_4_lohkoa.png"
              className="absolute inset-0 w-full h-full object-contain z-20"
            />
          )}

          <div className="absolute inset-0 z-30">
            {renderedIngredients}
          </div>
        </div>

       
        <div className="mt-6 flex items-center gap-80 text-gray-700">
          <span>100 g / 1,99 €</span>
          <span>{selectedBowl ? selectedBowl.volume : 0} ml</span>
        </div>
      </div>

      
      <SaveRecipeModal
        isOpen={isSaveOpen}
        onClose={() => setIsSaveOpen(false)}
      />
    </>
  );
}