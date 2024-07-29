import ProductCard from "./ProductCard";
import React from "react";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 space-y-5">
      <p className="text-blue-700 font-bold">Products</p>
      <h1 className="text-black font-bold text-3xl">Check What We Have</h1>
      <div className="flex lg:flex-row sm:flex-col lg:space-x-10  mt-10 ">
        <ProductCard
          image="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png"
          name="Brush Raglan Sweatshirt"
          price="$195"
        />
        <ProductCard
          image="https://cdn.sanity.io/images/dow10h3v/production/ffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png"
          name="Cameryn Sash Tie Dress"
          price="$545"
        />
        <ProductCard
          image="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png"
          name="Brush Raglan Sweatshirt"
          price="$195"
        />
      </div>
    </div>
  );
}
