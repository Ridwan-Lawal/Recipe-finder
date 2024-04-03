import {
  PiBookmarkFill,
  PiForkKnifeFill,
  PiHeartFill,
  PiMagnifyingGlassBold,
} from "react-icons/pi";
import PageIconCount from "./PageIconCount";

function NavBar() {
  return (
    <nav className="border bg-blue-600 flex">
      <p className="text-2xl flex items-center  gap-3 font-medium text-white">
        <PiForkKnifeFill className="text-3xl" />
        <span className="hidden md:block">Recipe Finder</span>
      </p>

      <form className="bg-blue-500 flex gap-4 items-center p-2.5 rounded-md ">
        <PiMagnifyingGlassBold className="text-xl text-white" />

        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-blue-300 bg-inherit bg-opacity focus:outline border w-[90%]"
        />
      </form>

      <section className="flex gap-5 justify-between">
        <PageIconCount foodNo={0}>
          <PiHeartFill className="nav-icon" />
        </PageIconCount>

        <PageIconCount foodNo={0}>
          <PiBookmarkFill className="nav-icon" />
        </PageIconCount>
      </section>
    </nav>
  );
}

export default NavBar;
