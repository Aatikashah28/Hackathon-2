import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex lg:flex-row flex-col space-y-4 justify-between items-center py-10 pl-20 pr-20">
        <img
          src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75"
          className=""
        />
        <Link href="Females">Female</Link>
        <Link href="Males">Male</Link>
        <Link href="Kids">Kids</Link>
        <Link href="AllProducts">All Products</Link>
        <input
          type="text"
          placeholder="what you are looking for? "
          className=" border-2 border-gray-200  w-80 p-2"
        />
        <button>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-gray-200 rounded-full p-2 size-10"
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
        </button>
      </div>
    </>
  );
}
