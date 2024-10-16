import { CgProfile } from "react-icons/cg";
import { PiBowlFood } from "react-icons/pi";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Footer = () => {
  const [profileState, setProfileState] = useState(false);
  const [foodState, setFoodState] = useState(false);
  const [InstamartState, setInstamartState] = useState(false);
  const [dineOUtState, setDineOutState] = useState(false);
  const [carState, setCarState] = useState(false);
  const [ReorderState, setReorderState] = useState(false);

  const handleProfileState = () => {
    setProfileState(true);
    setFoodState(false);
    setInstamartState(false);
    setDineOutState(false);
    setCarState(false);
    setReorderState(false);
  };

  const handleFoodState = () => {
    setProfileState(false);
    setFoodState(true);
    setInstamartState(false);
    setDineOutState(false);
    setCarState(false);
    setReorderState(false);
  };

  const handleInstamartState = () => {
    setProfileState(false);
    setFoodState(false);
    setInstamartState(true);
    setDineOutState(false);
    setCarState(false);
    setReorderState(false);
  };

  const handleDineOutState = () => {
    setProfileState(false);
    setFoodState(false);
    setInstamartState(false);
    setDineOutState(true);
    setCarState(false);
    setReorderState(false);
  };

  const handleCarState = () => {
    setProfileState(false);
    setFoodState(false);
    setInstamartState(false);
    setDineOutState(false);
    setCarState(true);
    setReorderState(false);
  };

  const handleReorderState = () => {
    setProfileState(false);
    setFoodState(false);
    setInstamartState(false);
    setDineOutState(false);
    setCarState(false);
    setReorderState(true);
  };
  return (
    <>
      <div
        className="w-full h-12  flex justify-between items-center px-3 box-border
        fixed bottom-0 bg-white"
        style={{ boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <Link
          to="/"
          className="cursor-pointer"
          style={{ color: profileState ? "orange" : "black" }}
          onClick={handleProfileState}
        >
          <FaHome className="m-auto" />
          <div className="text-sm">Home</div>
        </Link>
        <Link
          to="/food"
          className="cursor-pointer"
          style={{ color: foodState ? "orange" : "black" }}
          onClick={handleFoodState}
        >
          <PiBowlFood className="m-auto " />

          <div className="text-sm">Food</div>
        </Link>
        <Link
          to="/instamart"
          className="cursor-pointer"
          style={{ color: InstamartState ? "orange" : "black" }}
          onClick={handleInstamartState}
        >
          <FaBasketShopping className="m-auto" />
          <div className="text-sm">Instamart</div>
        </Link>
        <Link
          to="/dineout"
          className="cursor-pointer"
          style={{ color: dineOUtState ? "orange" : "black" }}
          onClick={handleDineOutState}
        >
          <FaHotel className="m-auto" />
          <div className="text-sm">Dineout</div>
        </Link>
        <Link
          to="/card"
          className="cursor-pointer"
          style={{ color: carState ? "orange" : "black" }}
          onClick={handleCarState}
        >
          <FaRegCreditCard className="m-auto" />
          <div className="text-sm">Card</div>
        </Link>
        <Link
          to="/reorder"
          className="cursor-pointer"
          style={{ color: ReorderState ? "orange" : "black" }}
          onClick={handleReorderState}
        >
          <MdShoppingCartCheckout className="m-auto" />
          <div className="text-sm">Reorder</div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
