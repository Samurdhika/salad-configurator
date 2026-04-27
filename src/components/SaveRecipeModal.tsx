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
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const token = useAuthStore((state) => state.token);
  const slots = useIngredientStore((state) => state.slots);
  const selectedBowl = useIngredientStore((state) => state.selectedBowl);
  const clearSelection = useIngredientStore((state) => state.clearSelection);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!token) {
      setError("You must be logged in");
      return;
    }

    if (!selectedBowl) {
      setError("Please select a bowl");
      return;
    }

    if (!recipeName.trim()) {
      setError("Recipe name is required");
      return;
    }

    try {
      const ingredientIds = Object.values(slots)
        .filter(Boolean)
        .map((item) => item!.id);

      await saveRecipe(token, {
        name: recipeName,
        bowl_id: selectedBowl.id,
        ingredient_ids: ingredientIds,
        is_public: isPublic,
      });

      setSuccessMessage("Recipe saved successfully!");

      // reset form
      setRecipeName("");
      setIsPublic(false);

      // clear bowl
      clearSelection();

      // close modal after short delay (better UX)
      setTimeout(() => {
        onClose();
        setSuccessMessage("");
      }, 1200);

    } catch (err) {
      setError("Failed to save recipe");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-zinc-900 text-white rounded-3xl p-8 w-[360px] shadow-2xl">

        <h2 className="text-xl font-bold mb-4 text-center">
          Save Recipe
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {successMessage && (
          <p className="text-green-500 text-sm mb-3 text-center">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Recipe Name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="p-2 rounded bg-zinc-800 border border-zinc-700"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            Make Public
          </label>

          <button
            type="submit"
            className="bg-[#A2D135] text-black font-semibold py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}