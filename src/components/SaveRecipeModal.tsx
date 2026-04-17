import { useState } from "react";
import { Modal } from "./Modal";

interface Props {
    isOpen : boolean;
    onClose: () => void;
}

export function saveRecipeModal({isOpen, onClose}: Props){
    const [recipeName, setRecipeName] = useState("");
    const [isPublic, setIsPublic] = useState(false)

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form>
                <h2>Recipe</h2>
                <label>Recipe Name</label>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />

                <label>Make Public</label>
                <input 
                    type="checkbox "
                    checked = {isPublic}
                    onChange = {(e) => setIsPublic(e.target.checked)}
                />
            </form>
        </Modal>
    );
}