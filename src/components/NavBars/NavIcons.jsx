import { PiBookmarkFill, PiHeartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import PageIconCount from "./PageIconCount";
import { useRecipe } from "../../assets/contexts/RecipeContex";

function NavIcons() {
  const navigate = useNavigate();
  const { favouriteData, bookmarkData } = useRecipe();

  return (
    <div className="flex gap-5  justify-between border">
      <PageIconCount
        onClick={() => navigate("/favourites")}
        foodNo={favouriteData.length}
      >
        <PiHeartFill className="nav-icon" />
      </PageIconCount>

      <PageIconCount
        onClick={() => navigate("/bookmark")}
        foodNo={bookmarkData.length}
      >
        <PiBookmarkFill className="nav-icon" />
      </PageIconCount>
    </div>
  );
}

export default NavIcons;
