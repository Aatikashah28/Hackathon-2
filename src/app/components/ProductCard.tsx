import React from "react";

interface ProductCardProp {
  image: string;
  name: string;
  price: string;
}

export default function ProductCard({ image, name, price }: ProductCardProp) {
  return (
    <div className="flex flex-col justify-center items-center  transform transition-transform duration-300 hover:scale-110 space-y-2">
      <div className="bg-gray-200">
        <img src={image} className="" />
      </div>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-lg font-semibold">{price}</p>
    </div>
  );
}
