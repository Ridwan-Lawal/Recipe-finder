/* eslint-disable react/prop-types */
function PageIconCount({ children, foodNo }) {
  return (
    <button className="relative ">
      {children}
      <p className="px-[5px]  py-1.52px] flex items-center top-0.5 -right-2    rounded-full text-[13px] font-semibold text-white  bg-red-600 absolute ">
        {foodNo}
      </p>
    </button>
  );
}

export default PageIconCount;
