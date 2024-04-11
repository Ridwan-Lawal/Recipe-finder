import { PiArrowLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-8">
      <button onClick={() => navigate(-1)}>
        <PiArrowLeftBold className="text-[26px] text-gray-800 font-bold" />
      </button>

      <div className="flex flex-col justify-center items-center h-[70vh] gap-2">
        <p className="text-2xl">👻</p>
        <p className="text-blue-600 text-2xl font-medium">Page not found!</p>
      </div>
    </div>
  );
}

export default PageNotFound;
