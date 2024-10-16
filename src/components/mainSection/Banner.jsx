const Banner = () => {
  return (
    <>
      <div className="w-[94%] m-auto h-80  mt-6 grid grid-cols-2 grid-rows-2  box-border items-center justify-items-center ">
        <div
          className=" w-[90%] h-[90%]  rounded-lg text-center py-1 box-border "
          style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="text-[16px] font-bold">FOOD DELIVERY</div>
          <div className="text-[13px]">
            FOOD YOU <span></span>, ON TIME
          </div>
          <div
            className="text-[8px] font-bold text-orange-900
          bg-gradient-to-r from-orange-400 to-white
          w-32 m-auto rounded-lg box-border px-1"
          >
            UP TO 60% OFF & FREE DEL
          </div>
        </div>
        <div
          className=" w-[90%] h-[90%] rounded-lg box-border p-2"
          style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="text-[13px] font-bold">INSTAMART</div>
          <div className="text-[11px]">DIWALI DHAMAKA SALE</div>
          <div
            className="text-[11px]  text-orange-900
           bg-gradient-to-r from-orange-400 to-white
          w-32 rounded-lg box-border px-1 font-bold"
          >
            UP TO 80% OFF
          </div>
        </div>
        <div
          className="w-[90%] h-[90%] rounded-lg box-border p-2"
          style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="text-[13px] font-bold">DINEOUT</div>
          <div className="text-[13px] text-gray-600">
            GIRF <span className="text-orange-900">IS ENDING SOON!!</span>
          </div>
          <div
            className="text-orange-900 font-bold text-[11px]  bg-gradient-to-r from-orange-400 to-white
          w-32 box-border px-1 rounded-lg"
          >
            FLAT 50% OFF
          </div>
        </div>
        <div
          className=" w-[90%] h-[90%] rounded-lg box-border p-2"
          style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="text-[11px] font-bold">GENIE</div>
          <div className="text-gray-500 text-[11px]">PICK-UP & DROP</div>
        </div>
      </div>
    </>
  );
};
export default Banner;
