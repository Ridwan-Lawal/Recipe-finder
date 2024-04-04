import { PiForkKnifeFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function NavLogo() {
  const navigate = useNavigate();
  return (
    <p
      onClick={() => navigate("/")}
      className="text-2xl flex items-center  border  gap-3 font-medium text-white"
    >
      <PiForkKnifeFill className="text-3xl" />
      <span className="hidden sm:text-xl lg:text-2xl sm:block">
        Recipe Finder
      </span>
    </p>
  );
}

export default NavLogo;
