// import Button from "../components/Recipe Page/Button";
// import { IoIosArrowDown } from "react-icons/io";

import { PiArrowLeftBold } from "react-icons/pi";
import FoodContent from "../components/Recipe Page/FoodContent";
import FoodHeader from "../components/Recipe Page/FoodHeader";
import NavLogo from "../components/NavBars/NavLogo";

function Recipe() {
  return (
    <div className="">
      <section className="bg-blue-600 flex items-center justify-between px-4 mb-10 shadow-lg">
        <button className="">
          <PiArrowLeftBold className="text-[26px] text-white font-bold" />
        </button>
        <p className="flex text-2xl text-white gap-4 py-3 px-4 font-medium ">
          <NavLogo /> Recipe Finder
        </p>
      </section>

      <FoodHeader />
      <FoodContent />
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
