import React from "react";

export default function Promotions() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 space-y-5">
      <p className="text-blue-700 font-bold">Promotions</p>
      <h1 className="text-black font-bold text-3xl">Our Promotion Events</h1>
      <div className="flex flex-col lg:flex-row space-x-4 pr-20 pl-20">
        <div className="flex flex-col space-y-2 text-center">
          <div className="bg-gray-300 flex flex-row justify-center pl-10">
            <div className="flex flex-col pl-10 items-center justify-center">
              <h1 className="text-5xl font-bold">GET UP TO 60%</h1>
              <h1>For the summer season</h1>
            </div>
            <img
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=640&q=75"
              alt=""
            />
          </div>
          <div className=" bg-black flex flex-col justify-center items-center text-white space-y-5 p-10">
            <h1 className="text-4xl font-bold text-white">GET 30% OFF</h1>
            <h1>Use Promo Code</h1>
            <button className="text-white font-bold text-2xl bg-gray-500 p-2 rounded">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col sm:justify-between sm:space-x-2 md:space-y-2 lg:space-y-0">
          <div className="  flex flex-col justify-between sm:w-25 h-25  md:w-50 sd:h-50 bg-orange-200 sm:pt-5 sm:mt-2 lg:mt-0  sm:space-y-2 md:space-y-0">
            <div className="flex flex-col pl-4">
              <p>Flex Sweatshirt</p>
              <p className="flex flex-row space-x-2">
                <span className="line-through"> $100.00 </span>
                <span className="font-bold">$75.00</span>
              </p>
            </div>
            <img
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=640&q=75"
              alt=""
            />
          </div>
          <div className=" sm:pt-5 flex flex-col  justify-between sm:w-25 sm:h-25  md:w-50 md:h-50 bg-gray-300 sm:mt-2 ">
            <div className="flex flex-col pl-4">
              <p>Flex Push Button Bomber</p>
              <p className="flex flex-row space-x-2">
                <span className="line-through"> $225.00 </span>
                <span className="font-bold">$190.00</span>
              </p>
            </div>
            <img
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
