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
      " https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png",
    name: " Brished Raglan Sweatshirt",
    category: "Sweater ",
    price: "$195 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png",
    name: " Flex Sweatpants",
    category: "Pants ",
    price: "$175 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png",
    name: " Flex Sweatpants",
    category: "Pants ",
    price: "$175 ",
  },
  {
    image:
      " https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png",
    name: " Brished Raglan Sweatshirt",
    category: "Sweater ",
    price: "$195 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png",
    name: " Flex Sweatpants",
    category: "Pants ",
    price: "$175 ",
  },
  {
    image:
      " https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png",
    name: " Brished Raglan Sweatshirt",
    category: "Sweater ",
    price: "$195 ",
  },
  {
    image:
      "https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png",
    name: " Flex Sweatpants",
    category: "Pants ",
    price: "$175 ",
  },
];

export default function Female() {
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
