import FavouriteFoodCard from "./FavouriteFoodCard";

function FavouriteFoodBlock() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[450px] mx-auto sm:max-w-[1330px] px-8 mt-14">
      <FavouriteFoodCard />
      <FavouriteFoodCard />
      <FavouriteFoodCard />
      <FavouriteFoodCard />
    </div>
  );
}

export default FavouriteFoodBlock;
