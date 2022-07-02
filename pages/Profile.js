import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Profile = () => {

  const otpNum =  Math.floor(1000 + Math.random() * 9000);


  const otp = () => {
    let showOtp = alert( "Your OTP is " + otpNum)
    console.log( showOtp)
  }


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Adidas-Profile</title>
      </Head>{" "}
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center gap-8  items-center h-screen w-full">
          <div className="flex flex-col gap-6 w-10/12 md:w-4/12 mt-[600px] md:-mt-60">
            <h1 className="uppercase text-4xl font-black">Log In</h1>
            <input required placeholder="Enter Email Here" className="md:py-4 outline-none py-2 px-4 md:px-8 w-[300px] md:w-[600px] text-gray-400 border-2" />
            <h1 className="text-gray-400 text-sm tracking-wide">You will recieve a OTP here</h1>
            <button onClick={otp} className="text-white w-fit bg-black outline-none text-md font-bold py-4 px-8">LOG IN</button> 
            <h1 className="flex flex-wrap w-full text-xs md:text-md  md:w-9/12">By clicking LOG IN, I agree to the <u>Terms & Conditions</u>, the <u>Creators Club Terms & Conditions</u> and the adidas <u>Privacy Policy</u>.</h1>
          </div>
          <div className="w-10/12 md:w-4/12 flex flex-col gap-4 pb-24">
            <h1 className="text-4xl font-bold">JOIN THE CLUB. GET REWARDED.</h1>
            <h1>Join the adidas Creators Club membership program:</h1>
            <ul className=" flex flex-col">
              <li>
              ✔ Get immediate access to all Challenger level rewards
              </li>
              <li>
              ✔ Earn access to shop limited edition products
              </li>
              <li>
              ✔ Level up for exclusive access to sport, yoga and music events
              </li>
              <li>
              ✔ Receive our best special offers and promotions
              </li>
            </ul>
            <h1>Join now and start earning points to access new levels and rewards. Its time to unlock the best of adidas.</h1>
            <button className="text-white w-fit bg-black outline-none text-md font-bold py-4 px-8">JOIN THE CLUB</button> 
          <img src="https://adidas-indol.vercel.app/_next/image?url=https%3A%2F%2Fwww.adidas.co.in%2Fglass%2Freact%2F137ceff%2Fassets%2Fimg%2FCC2.0_my_account_register.jpg&w=750&q=75"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
