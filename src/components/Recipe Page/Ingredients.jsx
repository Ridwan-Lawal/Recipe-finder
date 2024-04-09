/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { useState } from "react";
import { useGetIngredient } from "../../hooks/useGetIngredients";

function Ingredients({ selectedFood }) {
  const [isIngredientOpen, setIsIngredientOpen] = useState(false);
  const ingredients = useGetIngredient(selectedFood);

  function handleIngredientOpen() {
    setIsIngredientOpen((curState) => !curState);
  }

  return (
    <div className="mt-4 sm:w-[45%] border">
      <div className="flex justify-end">
        <Button
          paddingX="px-2.5 mt-10"
          content="View Ingredient"
          onClick={handleIngredientOpen}
        >
          <IoIosArrowDown className="text-lg" />
        </Button>
      </div>

      {isIngredientOpen && (
        <div className="text-right">
          <h3 className="text-2xl font-semibold mt-5 text-gray-900 underline underline-offset-4">
            Ingredients
          </h3>

          <ul className=" mt-3 space-y-2">
            {ingredients?.map((ingredient, i) => (
              <li key={i} className="text-xl font-medium ">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Ingredients;
