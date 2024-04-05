import { PiBookmarkBold, PiHeartBold } from "react-icons/pi";

function FoodHeader() {
  return (
    <div className="px-8">
      <section className="bg-red-500 flex justify-center p-4">
        <img src="/src/assets/Lime.png" alt="" className="w-[300px]" />
      </section>

      <section className="flex justify-between mt-4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
            Sushi Rice
          </h1>
          <p className="text-2xl text-gray-500 mt-3">Epicurious</p>
        </div>

        <div className="flex gap-8 mt-5">
          <PiHeartBold className="foodcard-icons text-3xl" />
          <PiBookmarkBold className="foodcard-icons text-3xl" />
        </div>
      </section>
    </div>
  );
}

export default FoodHeader;
