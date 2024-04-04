import BookmarkFoodBlock from "../components/Bookmark/BookmarkFoodBlock";
import NavBar from "../components/NavBars/NavBar";

function Bookmark() {
  return (
    <div>
      <NavBar />
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold px-8 mt-4">
        Bookmark
      </h2>
      <BookmarkFoodBlock />
    </div>
  );
}

export default Bookmark;
