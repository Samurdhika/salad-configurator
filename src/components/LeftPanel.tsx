import React, {useState} from "react";

const sizes = [
    {label: "Neliö 250 ml", value: 250},
    {label: "Neliö 500 ml", value:500},
    {label: "Ympyrä 250 ml", value: 250},
    {label: "Ympyrä 500 ml", value: 500}
];

 export function LeftPanel(){
    const [selected, setSelected] = useState(3);

    return(
        <div className="left-panel">
            <h3>1. Valitse rasia</h3>
        </div>
    )
}