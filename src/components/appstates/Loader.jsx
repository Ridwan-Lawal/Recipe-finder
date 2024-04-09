import { Hourglass } from "react-loader-spinner";

function Loader() {
  return (
    <div className="mt-44 px-8 flex justify-center items-center">
      <Hourglass
        visible={true}
        height="50"
        width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
}

export default Loader;
