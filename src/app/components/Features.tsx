import React from "react";
import FeatureCard from "./FeatureCrad";

export default function FeaturesSec() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 pl-24 pr-24  space-x-10  ">
      <div className=" flex flex-row  space-x-10 ">
        <div className="flex flex-col space-y-10 ">
          <FeatureCard
            title="Using Good Quality Materials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FeatureCard
            title="Using Good Quality Materials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="flex flex-col space-y-10 ">
          <FeatureCard
            title="Using Good Quality Materials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FeatureCard
            title="Using Good Quality Materials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <img
          src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=640&q=75"
          className="w-30 h-80"
        />
      </div>
      <div className="flex flex-col items-start justify-center space-y-5">
        <p className="text-gray-700">
          This piece is ethically crafted in our small family-owned workshop in
          Peru with unmatched attention to detail and care. The Natural color is
          the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <button className="bg-black text-white p-2">See all products</button>
      </div>
    </div>
  );
}
