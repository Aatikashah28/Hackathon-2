import React from "react";

export default function Newsletter() {
  return (
    <div className="flex flex-col justify-center items-center m-20 space-y-6">
      <h1 className="text-2xl font-bold">Subscribe our Newsletter</h1>

      <div className="absolute  flex justify-center items-center opacity-10 ">
        <h1 className="text-9xl font-bold text-gray-900">Newsletter</h1>
      </div>
      <p className="relative text-l text-gray-800 m-3">
        Get the latest information and promo offers directly
      </p>
      <div className=" relative flex flex-row justify-center space-x-2 m-20 ">
        <input
          type="text"
          className=" border-2 border-black text-gray-400 p-2"
          placeholder="input email address"
        />
        <button className="bg-black text-white p-2">Get Started</button>
      </div>
    </div>
  );
}
