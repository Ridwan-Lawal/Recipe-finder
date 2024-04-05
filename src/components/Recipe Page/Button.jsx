/* eslint-disable react/prop-types */
function Button({ content = "button", children, paddingX = "px-8" }) {
  return (
    <button
      className={` shadow-md ${paddingX} rounded-md bg-blue-500 text-white border border-transparent font-medium hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300 py-2 flex  items-center justify-between gap-10`}
    >
      {content}
      {children}
    </button>
  );
}

export default Button;
