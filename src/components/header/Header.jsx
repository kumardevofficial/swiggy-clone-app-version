import { CgProfile } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdWork } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div
        className=" flex-col w-full h-20 justify-center box-border sticky top-[-35px]"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
      >
        {/* first row start */}
        <div className="w-full relative flex justify-between px-2 items-center">
          <div>
            <div className="text-sm flex">
              <MdWork />
              Work
            </div>
            <div className="text-sm">address</div>
          </div>
          <div className="flex gap-x-3">
            <div className="border-2 border-black border-solid rounded-lg h-7 w-11 flex justify-center items-center">
              One
            </div>
            <div>
              <CgProfile className="text-3xl" />
            </div>
          </div>
        </div>
        {/* first row End */}
        {/* second row start */}
        <div className="w-full flex justify-center sticky top-0">
          <input
            type="search"
            className="border-[1px] border-black border-solid rounded-md w-[98%] text-sm h-8 px-1"
            placeholder="search for 'Biryani'"
          />
          <span className="absolute right-5 top-1 cursor-pointer">
            <FaMicrophone />
          </span>
          <span>
            <IoSearch className="absolute right-11 top-1 cursor-pointer" />
          </span>
        </div>
        {/* second row end */}
      </div>
    </>
  );
};

export default Header;
