/* eslint-disable react/prop-types */
import NavIcons from "./NavIcons";
import NavLogo from "./NavLogo";
import NavSearchBar from "./NavSearchBar";

function NavBar({ value, onChange }) {
  return (
    <nav className="border bg-blue-600 gap-3 sm:justify-between px-5 py-3 sm:px-7 sm:py-4 flex">
      <NavLogo />
      <div className="flex border w-full sm:w-[350px] gap-3">
        <NavSearchBar>
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            className="placeholder:text-blue-300 bg-inherit bg-opacity focus:outline-none text-white font-medium  w-[90%]"
          />
        </NavSearchBar>
        <NavIcons />
      </div>
    </nav>
  );
}

export default NavBar;
