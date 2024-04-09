/* eslint-disable react/prop-types */
function PageIconCount({ children, foodNo, onClick }) {
  return (
    <button onClick={onClick} className="relative ">
      {children}
      <p className="w-5   flex items-center justify-center text-center top-0.5 -right-2    rounded-full text-[13px] font-semibold text-white  bg-red-600 absolute ">
        {foodNo}
      </p>
    </button>
  );
}

export default PageIconCount;
