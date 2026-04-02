import React from "react";
import type {Bowl} from "../types";

interface Props {
    bowls: Bowl[];
}

 export function LeftPanel({bowls}: Props){
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
                    className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4"
                    >
                        <img 
                        src={bowl.image_url}
                        alt={bowl.name}
                        className="h-8 w-8 object-contain" />
                        <span>{bowl.name}</span>
                    </div>
                ))}
                </div>
        </div>
    );
};