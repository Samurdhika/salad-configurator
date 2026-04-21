import { useState } from "react";
import { Modal } from "./Modal";
import { useAuthStore } from "../store/useAuthStore";
import { useIngredientStore } from "../store/useIngredientStore";
import { saveRecipe } from "../services/api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function SaveRecipeModal({ isOpen, onClose }: Props) {
  const [recipeName, setRecipeName] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const token = useAuthStore((state) => state.token);
  const slots = useIngredientStore((state) => state.slots);
  const selectedBowl = useIngredientStore((state) => state.selectedBowl);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token || !selectedBowl) return;

    const ingredientIds = Object.values(slots)
      .filter(Boolean)
      .map((item) => item!.id);

    await saveRecipe(token, {
      name: recipeName,
      bowl_id: selectedBowl.id,
      ingredient_ids: ingredientIds,
      is_public: isPublic,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
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
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />

        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}