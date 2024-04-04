import FavouriteFoodBlock from "../components/Favourite/FavouriteFoodBlock";
import NavBar from "../components/NavBars/NavBar";

function Favourite() {
  return (
    <div>
      <NavBar />
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold px-8 mt-4">
        Favourites
      </h2>
      <FavouriteFoodBlock />
    </div>
  );
}

export default Favourite;
