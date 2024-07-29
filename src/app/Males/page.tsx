import React from "react";
import ArticleCard from "../components/ArticleCard";

type CardProps = {
  image: string;
  name: string;
  category: string;
  price: string;
};
const ProductsData: CardProps[] = [
  {
    image:
      " https://cdn.sanity.io/images/dow10h3v/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png",
    name: " Flex Push Button Bomber",
    category: "Jacket ",
    price: "$225 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png",
    name: " Raglan Sweatshirt",
    category: "Sweatshirt ",
    price: "$195",
  },
  {
    image:
      " https://cdn.sanity.io/images/dow10h3v/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png",
    name: " Flex Push Button Bomber",
    category: "Jacket ",
    price: "$225 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png",
    name: " Raglan Sweatshirt",
    category: "Sweatshirt ",
    price: "$195",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png",
    name: " Raglan Sweatshirt",
    category: "Sweatshirt ",
    price: "$195",
  },
];

export default function Males() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-14 space-x-4 ">
      {ProductsData.map((ProductsData) => (
        <ArticleCard
          image={ProductsData.image}
          name={ProductsData.name}
          price={ProductsData.price}
          category={ProductsData.category}
        />
      ))}
    </div>
  );
}
