import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="italic ml-20 sm:ml-40 text-3xl w-auto md:w-10/12 font-semibold">
          BEST OF ADIDAS
        </h1>
        <div className="bg-[#E5E7EB] flex flex-wrap p-8 pt-12 pb-12 sm:mt-24 h-auto sm:h-96 items-center justify-center gap-5">
          <div className="text-xs w-fit md:w-1/3 ">
            <h1 className="text-sm font-bold">
              STORIES&#44; STYLES AND SPORTSWEAR AT ADIDAS&#44; SINCE 1949
            </h1>
            <br />
            <h1>
              Sport keeps us fit. Keeps you mindful. Brings us together. Through
              sport we have the power to change lives. Whether it is through
              stories of inspiring athletes. Helping you to get up and get
              moving. Sportswear featuring the latest technologies&#44; to up
              your performance. Beat your PB. adidas offers a home to the
              runner&#44; the basketball player&#44; the soccer kid&#44; the
              fitness enthusiast. The weekend hiker that loves to escape the
              city. The yoga teacher that spreads the moves. The 3-Stripes are
              seen in the music scene. On stage&#44; at festivals. Our sports
              clothing keeps you focused before that whistle blows. During the
              race. And at the finish lines. We&apos;re here to support
              creators. Improve their game. Their lives. And change the world.
              <br />
              <br />
              adidas is about more than sportswear and workout clothes. We
              partner with the best in the industry to co-create. This way we
              offer our fans the sports apparel and style that match their
              athletic needs&#44; while keeping sustainability in mind.
              We&apos;re here to support creators. Improve their game. Create
              change. And we think about the impact we have on our world.
            </h1>
          </div>
          <div className="text-xs w-fit md:w-1/3">
            <h1 className="text-sm font-bold">WORKOUT CLOTHES&#44; FOR ANY SPORT</h1>
            <br />
            <h1>
              adidas designs for and with athletes of all kinds. Creators&#44;
              who love to change the game. Challenge conventions. Break the
              rules and define new ones. Then break them again. We supply teams
              and individuals with athletic clothing pre-match. To stay
              focussed. We design sports apparel that get you to the finish
              line. To win the match. We support women&#44; with bras and tights
              made for purpose. From low to high support. Maximum comfort. We
              design&#44; innovate and itterate. Testing new technologies in
              action. On the pitch&#44; the tracks&#44; the court&#44; the pool.
              Like Stan Smith. And Superstar. Now seen on the streets and the
              stages.
              <br />
              <br />
              Through our collections we blur the borders between high fashion
              and high performance. Like our adidas by Stella McCartney athletic
              clothing collection designed to look the part inside and outside
              of the gym. Or some of our adidas Originals lifestyle pieces&#44;
              that can be worn as sportswear too. Our lives are constantly
              changing. Becoming more and more versatile. And adidas designs
              with that in mind.
            </h1>
          </div>
        </div>
        <div className=" h-auto sm:h-16 flex justify-center items-center bg-[#FDE047]">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <h1 className="font-black text-2xl mt-4">JOIN ADIDAS AND GET 15% OFF</h1>
            <button className="bg-black mb-4 sm:mb-0 items-center font-bold py-2 flex gap-2 text-white uppercase text-sm px-4 ">
              Sign Up
              <BsArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between h-40 w-10/12">
          <div className="items-center flex-col sm:flex-row justify-center  flex ">
            <Link href="/" className="">
              <img
                src="https://adidas-indol.vercel.app/logo.svg"
                className="h-16 cursor-pointer w-full"
              />
            </Link>
            <Link href="https://github.com/Vaibhav262610">
              <h1 className="text-sm text-gray-500  w-auto sm:w-96 cursor-pointer">
                © 2022 adidas - @vaibhav262610
              </h1>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/Vaibhav262610">
              <AiFillGithub
                size={25}
                className="fill-gray-700 cursor-pointer"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/vaibhavrajpoot/">
              <AiFillLinkedin
                size={25}
                className="fill-gray-700 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
