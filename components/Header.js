import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header1 h-screen flex justify-center  items-center">
        <div className="w-9/12  text-white">
          <h1 className="uppercase text-6xl font-black">LIGHT UP THE PITCH</h1>
          <h1 className="font-semibold text-sm mt-2">
            Best of Adidas, IT'S YOUR PLAY, START TODAY
          </h1>
          <button className="bg-white items-center font-bold mt-6 flex gap-2 text-black uppercase text-sm px-4 py-4 font-semibold">
            Shop Now
            <BsArrowRight size={20}  />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
