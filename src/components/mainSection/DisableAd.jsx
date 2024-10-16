import { FaHeart } from "react-icons/fa";
const DisableAd = () => {
  return (
    <>
      <div className="w-[94%] h-52 m-auto mt-10 mb-32 box-border px-4 pointer-events-none select-none">
        <div className="text-7xl font-bold">Live </div>
        <div className="text-7xl font-bold"> it up! </div>
        <div className="flex items-center gap-1 text-sm mt-4">
          Crafed with
          <span>
            <FaHeart className="text-pink-600" />
          </span>
          in Bengaluru, India
        </div>
      </div>
    </>
  );
};

export default DisableAd;
