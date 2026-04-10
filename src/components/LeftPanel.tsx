import React from "react";
import type {Bowl} from "../types";
import { useIngredientStore } from "../store/useIngredientStore"; 

interface Props {
    bowls: Bowl[];
}

 export function LeftPanel({bowls}: Props){
    const setBowl = useIngredientStore((state) => state.setBowl); 
    const selectedBowl = useIngredientStore((state) => state.selectedBowl); 

    return(
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                1.
            </div>
            <h2 className="text-lg font-semibold mb-6">Valitse rasia</h2>
            <div className="w-full flex flex-col gap-4">
                {bowls.map((bowl) => (
                    <div
                    key={bowl.id}
                    onClick={() => setBowl(bowl)} 
                    className={`h-12 border-2 rounded-xl flex items-center px-4 cursor-pointer transition-all ${
                        selectedBowl?.id === bowl.id ? "border-[#A2D135]" : "border-gray-600"}`} // UPDATED className TO SHOW SELECTION
                    >
                        <img 
                        src={bowl.image_url}
                        alt={bowl.name}
                        className="h-8 w-8 object-contain mr-3" /> 
                        <span className={selectedBowl?.id === bowl.id ? "text-[#A2D135]" : ""}>
                            {bowl.name}
                        </span>
                    </div>
                ))}
                </div>
        </div>
    );
};