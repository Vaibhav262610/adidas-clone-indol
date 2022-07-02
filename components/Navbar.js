import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex fixed z-40 bg-white w-full justify-center border-b-2 border-b-gray-300">
        <div className=" h-20 w-11/12 flex items-center justify-between ">
          <div>
            <Link href="/">
              <img
                src="https://adidas-indol.vercel.app/logo.svg"
                className="h-16 cursor-pointer w-full"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href='/Profile'>
              <MdOutlinePersonOutline size={30} className=" cursor-pointer" />
            </Link>
            <Link href='/Shopping'>
              <AiOutlineShoppingCart size={30} className=" cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
