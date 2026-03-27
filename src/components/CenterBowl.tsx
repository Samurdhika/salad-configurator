import React from "react";

export function CenterBowl(){
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0 ">
        <div className="flex gap-3 mb-6 items-center ">
            <button className="bg-[#A2D135] gap-3 mb-6 items-center text-black rounded-full font-sans text-s p-2.5 font-bold hover:border-4 hover:border-[#6B8E24]">Salaatti</button>
            <button className="bg-[#A2D135] gap-3 mb-6 items-center text-black rounded-full font-sans text-s p-2.5 font-bold hover:border-4 hover:border-[#6B8E24]">Rahka</button>
            <div className="flex gap-2">
                <button className="w-8 h-8 bg-gray-300 rounded-full gap-3 mb-6 items-center" />
                <button className="w-8 h-8 bg-gray-300 rounded-full gap-3 mb-6 items-center" />
                <button className="w-8 h-8 bg-gray-300 rounded-full gap-3 mb-6 items-center" />
            </div>
        </div>
        <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative" />

        <div className="mt-6 flex items-center gap-80 text-gray-700">
            <span>100 g / 1,99 €</span>
            <span>500 ml</span>
        </div>
    </div>
    );
    
};