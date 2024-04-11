// import Button from "../components/Recipe Page/Button";
// import { IoIosArrowDown } from "react-icons/io";

import { PiArrowLeftBold } from "react-icons/pi";

import FoodHeader from "../components/Recipe Page/FoodHeader";
import NavLogo from "../components/NavBars/NavLogo";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipe } from "../assets/contexts/RecipeContex";
import Instructions from "../components/Recipe Page/Instructions";
import Ingredients from "../components/Recipe Page/Ingredients";

// and the food search in the homepage

// and searching for food in the bookmark and the favourite
// optimize performance
//reduce bundle size by splitting it using lazy loading.

function Recipe() {
  const { foodId } = useParams();
  const { foodData } = useRecipe();
  const navigate = useNavigate();

  const selectedFood = foodData?.meals
    ?.filter((meal) => meal.idMeal === foodId)
    ?.at(0);

  return (
    <div>
      <section className="bg-blue-600 flex items-center justify-between px-4 mb-10 shadow-lg">
        <button onClick={() => navigate(-1)}>
          <PiArrowLeftBold className="text-[26px] text-white font-bold" />
        </button>
        <div
          onClick={() => navigate("/")}
          className="flex text-2xl text-white gap-4 py-3 px-4 font-medium cursor-pointer "
        >
          <NavLogo />
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <FoodHeader selectedFood={selectedFood} />

        <div className="flex px-8 flex-col sm:flex-row justify-between">
          <Instructions selectedFood={selectedFood} />
          <Ingredients selectedFood={selectedFood} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;

{
  /* <Button />
      <Button paddingX="px-2.5" content="View Ingredient">
        <IoIosArrowDown className="text-lg" />
      </Button> */
}
