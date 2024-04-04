import NavIcons from "./NavIcons";
import NavLogo from "./NavLogo";
import NavSearchBar from "./NavSearchBar";

function NavBar() {
  return (
    <nav className="border bg-blue-600 gap-3 sm:justify-between px-5 py-3 sm:px-7 sm:py-4 flex">
      <NavLogo />
      <div className="flex border w-full sm:w-[350px] gap-3">
        <NavSearchBar />
        <NavIcons />
      </div>
    </nav>
  );
}

export default NavBar;
