import React from "react";

export function IngredientSection(){
    return(
        <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
            <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                    3.
                </div>
                <h2 className="text-lg font-semibold mb-6">Lisää raaka-aineet</h2>
            </div>

            <div className="flex gap-4 items-center overflow-x-auto justify-center">
                <input type="text" placeholder="Etsi tuotteita" className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135] mb-6" />

                <div className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Tuoreet salaatit</div>
                <div className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Hedelmät</div>
                <div className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Proteiinit</div>
                <div className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Ruokaisat komponentit</div>
                <div className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Juustot & lisukkeet</div>
            </div>
        </div>
    )
}