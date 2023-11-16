import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

const NaveBar = () => {
  const [naveScroll, setNaveScroll] = useState();
  const navigate = useNavigate();
  const { cartCount } =useCart()

  const handelScroll = () => {
    if (window.scrollY > 0) {
      setNaveScroll(true);
    } else {
      setNaveScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  const addToCart = () => {
    navigate("/addtocart");
  };

  return (
    <div
      className={`fixed top-0 w-full transition duration-5000 z-30 shadow-lg ${
        naveScroll ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className=" flex items-center justify-between p-3">
        <div className=" ml-11">
          <h1>Rokib</h1>
        </div>
        <div className=" flex list-none mr-12 ">
          <li className=" p-2 divide-y divide-solid  mr-10">
            <Link to={"/login"}> login </Link>
          </li>
          <li className="p-2  divide-y divide-solid  mr-10">
            <Link to={"/signup"}>Sing Up</Link>
          </li>
          <li
            className=" p-2  divide-y divide-solid cursor-pointer mr-10"
            onClick={addToCart}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{cartCount}</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
