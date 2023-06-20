import React from "react";
import { logo, payments } from "../assets";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logo} alt="" />
          <p>twentyfourtyº</p>
          <img className="w-80" src={payments} alt="" />
          <div className="flex gap-5 text-white">
            <FaInstagram className="hover:text-yellow-500 duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 duration-300 cursor-pointer" />
            <FaTiktok className="hover:text-yellow-500 duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-3">
            <p>email</p>
            <p>tel</p>
            <p>morada</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2">
            <p className=" flex items-center gap-3 hover:text-yellow-500 duration 300 cursor-pointer">
              <span className="mt-0.5">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className=" flex items-center gap-3 hover:text-yellow-500 duration 300 cursor-pointer">
              <span className="mt-0.5">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className=" flex items-center gap-3 hover:text-yellow-500 duration 300 cursor-pointer">
              <span className="mt-0.5">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className=" flex items-center gap-3 hover:text-yellow-500 duration 300 cursor-pointer">
              <span className="mt-0.5">
                <BsPersonFill />
              </span>
              My Account
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="email"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
