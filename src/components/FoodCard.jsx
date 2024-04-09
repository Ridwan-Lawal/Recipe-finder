import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function FoodCard({ meal, children }) {
  return (
    <div className="  rounded-lg overflow-hidden shadow-lg shadow-gray-300 cursor-pointer ">
      <Link
        key={meal.idMeal}
        to={`/recipe/${meal.idMeal}?name=${meal.strMeal}`}
      >
        <section className="  bg-white flex justify-center border ">
          <img
            src={meal?.strMealThumb}
            alt=""
            className="w-full hover:scale-105 transition-all duration-400 object-cover h-64"
          />
        </section>
      </Link>

      <div className="flex items-start justify-between px-5 gap-5 pt-6 pb-8">
        <section className="space-y-2">
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}?name=${meal.strMeal}`}
          >
            <h2 className="text-[22px] hover:underline font-semibold">
              {meal?.strMeal}
            </h2>
          </Link>
          <p className="font-medium text-gray-500">{meal?.strCategory}</p>
        </section>

        <section className="text-2xl flex gap-6">{children}</section>
      </div>
    </div>
  );
}

export default FoodCard;
