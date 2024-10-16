import { CgProfile } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdWork } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div
        className=" flex-col w-full h-[92px] justify-center box-border sticky top-[-45px] px-2 py-2 bg-white"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
      >
        {/* first row start */}
        <div className="w-full relative flex justify-between px-2 items-center">
          <div>
            <div className="text-sm flex items-center gap-x-1 font-bold">
              <MdWork className="text-orange-900" />
              Work
            </div>
            <div className="text-sm font-thin">address</div>
          </div>
          <div className="flex gap-x-3">
            <div className="border-2 border-orange-900 rounded-3xl border-solid  h-7 w-11 flex justify-center items-center font-bold text-orange-900">
              One
            </div>
            <div>
              <CgProfile className="text-3xl bg-black text-white rounded-full" />
            </div>
          </div>
        </div>
        {/* first row End */}
        {/* second row start */}
        <div className="w-full h-10 items-center flex justify-center sticky top-0 ">
          <input
            type="search"
            className="border-[1px] border-gray-200 border-solid rounded-md w-[98%] text-sm h-8 px-1"
            placeholder="search for 'Biryani'"
            style={{
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
              outline: "none",
            }}
          />
          <span className="absolute right-5 top-3 cursor-pointer">
            <FaMicrophone className="text-orange-900" />
          </span>
          <span>
            <IoSearch className="absolute right-11 top-3 cursor-pointer text-gray-500" />
          </span>
        </div>
        {/* second row end */}
      </div>
    </>
  );
};

export default Header;
