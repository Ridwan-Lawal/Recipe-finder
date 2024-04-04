import { PiMagnifyingGlassBold } from "react-icons/pi";

function NavSearchBar() {
  return (
    <form className="bg-blue-500 w-[100%]   flex gap-4 items-center p-2.5 rounded-md ">
      <PiMagnifyingGlassBold className="text-xl text-white" />

      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-blue-300 bg-inherit bg-opacity focus:outline-none text-white font-medium  w-[90%]"
      />
    </form>
  );
}

export default NavSearchBar;
