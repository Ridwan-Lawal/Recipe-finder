/* eslint-disable react/prop-types */
import { PiMagnifyingGlassBold } from "react-icons/pi";

function NavSearchBar({ children }) {
  return (
    <form className="bg-blue-500 w-[100%]   flex gap-4 items-center p-2.5 rounded-md ">
      <PiMagnifyingGlassBold className="text-xl text-white" />

      {children}
    </form>
  );
}

export default NavSearchBar;
