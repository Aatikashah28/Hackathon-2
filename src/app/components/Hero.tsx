import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between px-10 overflow-hidden ">
      <div className="flex flex-col justify-center items-start space-y-5">
        <button className=" bg-blue-200 rounded-sm p-2 text-blue-800 font-semibold ">
          Sale 70%
        </button>
        <h1 className="text-6xl text-black font-bold">
          An Industrial Take on StreetWear
        </h1>
        <p className="text-gray-600">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex flex-row justify-between items-center bg-black p-5 space-x-2">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            ></path>
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            ></path>
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-white font-bold">Start Shopping</p>
        </button>

        <div className="flex flex-row justify-between pt-20 space-x-7">
          <img
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
            alt=""
          />
          <img
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
            alt=""
          />
          <img
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
            alt=""
          />
          <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=256&q=75" />
        </div>
      </div>
      <img
        src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
        className="bg-red-100  rounded-full "
      />
    </div>
  );
}
