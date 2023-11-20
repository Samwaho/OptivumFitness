import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <InfinitySpin />
    </div>
  );
};

export default Loader;
