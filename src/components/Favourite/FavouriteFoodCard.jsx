/* eslint-disable react/prop-types */
function FavouriteFoodCard({
  foodName = "Carrot cake",
  foodCategory = "BBC Good Food",
}) {
  return (
    <div className=" border *:border-black rounded-lg overflow-hidden shadow-lg shadow-gray-300 cursor-pointer">
      <section className="border border-blue-500  bg-red-700 flex justify-center">
        <img src="/src/assets/Lime.png" alt="" className="w-[250px] " />
      </section>

      <div className="flex items-center justify-between px-5 pt-6 pb-8">
        <section className="space-y-2">
          <h2 className="text-[22px] hover:underline font-semibold">
            {foodName}
          </h2>
          <p className="font-medium text-gray-500">{foodCategory}</p>
        </section>

        <section className="text-lg  gap-6 text-blue-800 hover:text-red-600 font-semibold">
          Remove
        </section>
      </div>
    </div>
  );
}

export default FavouriteFoodCard;
