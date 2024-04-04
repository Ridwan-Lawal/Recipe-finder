import { PiBookmarkFill, PiHeartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import PageIconCount from "./PageIconCount";

function NavIcons() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-5  justify-between border">
      <PageIconCount onClick={() => navigate("/favourites")} foodNo={0}>
        <PiHeartFill className="nav-icon" />
      </PageIconCount>

      <PageIconCount onClick={() => navigate("/bookmark")} foodNo={0}>
        <PiBookmarkFill className="nav-icon" />
      </PageIconCount>
    </div>
  );
}

export default NavIcons;
