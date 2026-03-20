import React, {useState} from "react";

interface BodyProps {
    name: string;
}

export function Body({name}:BodyProps){
    return (
        <div className="bg-black rounded-2xl p-4">
            
            <p className="text-slate-500 font-medium mb-6">{name}</p>
        </div>
    )
}