"use client";
import { useSearchParams } from "next/navigation";
import Counter from "../components/Counter";

const Description = () => {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const name = searchParams.get("name");
  const category = searchParams.get("category");
  const price = searchParams.get("price");

  return (
    <div className="grid grid-cols-2  ml-80 ">
      {image && <img src={image} alt={name || "Image"} className="w-80 h-96" />}
      <div className="flex flex-col justify-center space-y-4">
        {name && <h1 className="text-2xl font-bold">{name}</h1>}
        {category && <h1 className="text-xl text-gray-500">{category}</h1>}

        <p>{<Counter />}</p>

        <div className="flex flex-row space-x-2 items-center">
          <button className="bg-black text-white font-bold p-2">
            Add to Cart
          </button>
          {price && <p className="text-xl font-bold text-black">{price}</p>}
        </div>
      </div>
    </div>
  );
};

export default Description;
