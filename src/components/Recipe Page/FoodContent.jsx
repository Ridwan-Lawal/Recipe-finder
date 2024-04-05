import { IoIosArrowDown } from "react-icons/io";

import Button from "./Button";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

function FoodContent() {
  return (
    <div className="px-8">
      <section className="sm:flex justify-between">
        <Button paddingX="px-2.5 mt-10" content="View Ingredient">
          <IoIosArrowDown className="text-lg" />
        </Button>

        <Button paddingX="px-2.5 mt-10" content="View Instructions">
          <IoIosArrowDown className="text-lg" />
        </Button>
      </section>

      <Ingredients />
      <Instructions />
    </div>
  );
}

export default FoodContent;
