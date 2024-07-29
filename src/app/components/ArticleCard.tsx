"use client";
import React from "react";
import { useRouter } from "next/navigation";

type CardProps = {
  image: string;
  name: string;
  category: string;
  price: string;
};

export default function ArticleCard({
  image,
  name,
  category,
  price,
}: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/description?image=${encodeURIComponent(
        image
      )}&name=${encodeURIComponent(name)}&category=${encodeURIComponent(
        category
      )}&price=${encodeURIComponent(price)}`
    );
  };

  return (
    <div
      className="flex flex-col justify-center space-y-2 cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={name} className="w-30 h-80" />
      <h1 className="text-xl font-bold">{name}</h1>
      <h1>{category}</h1>
      <p className="text-xl text-gray-600">{price}</p>
    </div>
  );
}
