/* eslint-disable react/prop-types */
import { PiMagnifyingGlassBold } from "react-icons/pi";
import NavIcons from "./NavIcons";
import NavLogo from "./NavLogo";
import { useRecipe } from "../../assets/contexts/RecipeContex";

function NavBar({ value, onChange, searchRecipes, onClick }) {
  const { dispatch } = useRecipe();

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    searchRecipes();
    dispatch({ type: "search/submit" });
    onClick();
  }

  return (
    <nav className="border bg-blue-600 gap-3 sm:justify-between px-5 py-3 sm:px-7 sm:py-4 flex">
      <NavLogo />
      <div className="flex  w-full sm:w-[350px] gap-3">
        <form onSubmit={handleSubmit} action="">
          <PiMagnifyingGlassBold className="text-xl text-white" />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            className="placeholder:text-blue-300 bg-inherit bg-opacity focus:outline-none text-white font-medium  w-[90%]"
          />
        </form>
        <NavIcons />
      </div>
    </nav>
  );
}

export default NavBar;
