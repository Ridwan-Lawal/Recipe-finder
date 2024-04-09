/* eslint-disable react/prop-types */

import AddDeleteFood from "../AddDeleteFood";

function FoodHeader({ selectedFood }) {
  return (
    <div className="px-8 md:flex gap-20">
      <section className="bg-red-500 flex justify-center md:w-[50%]">
        <img
          src={selectedFood?.strMealThumb}
          alt=""
          className="w-full h-72 object-cover"
        />
      </section>

      <section className="flex justify-between mt-4 md:w-[50%]">
        <div>
          <h1 className="text-[32px] sm:text-[33px] font-semibold text-gray-900">
            {selectedFood?.strMeal}
          </h1>
          <p className="text-2xl text-gray-500 mt-3">
            {selectedFood?.strCategory}
          </p>
        </div>

        <div className="flex gap-8 mt-5">
          <AddDeleteFood meal={selectedFood} font="text-3xl" />
        </div>
      </section>
    </div>
  );
}

export default FoodHeader;
