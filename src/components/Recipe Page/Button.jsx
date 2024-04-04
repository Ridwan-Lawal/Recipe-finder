import { PiArrowUDownLeft } from "react-icons/pi";

/* eslint-disable react/prop-types */
function Button({ content = "button" }) {
  return (
    <button className="px-8 border border-black rounded-md bg-blue-500 text-white font-medium py-2">
      {content}
      < />
    </button>
  );
}

export default Button;
