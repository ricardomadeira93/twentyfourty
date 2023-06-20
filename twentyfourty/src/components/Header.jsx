import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo, cartImg, userLogo } from "../assets/index";

const Header = () => {
  const productData = useSelector((state) => state.twenty.productData);
  const userInfo = useSelector((state) => state.twenty.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-sans sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-16" src={logo} />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer duration-300">
              Members
            </li>
            <li className="text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer duration-300">
              About
            </li>
            <li className="text-base text-black font-bold hover:text-red-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer duration-300">
              Contacts
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-8" src={cartImg} alt="" />
              <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold font-sans">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <div className="">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  userInfo
                    ? userInfo.image
                    : "https://images.pexels.com/photos/3585092/pexels-photo-3585092.jpeg"
                }
                alt=""
              />
            </div>
          </Link>
          {userInfo && (
            <p className="text-base font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
