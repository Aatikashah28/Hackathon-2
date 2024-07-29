import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Promotions from "./components/Promotions";
import Product from "./components/Product";
import FeaturesSec from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Product />
      <div className="flex lg:flex-col   lg:items-start  lg:space-y-4 lg:pl-96 lg:ml-96  sm:flex-row sm:justify-center sm:space-x-2 sm:flex-wrap items-center pb-5 pt-20 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900  ">
          Unique and Authentic
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
          Vintage Designer{" "}
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900  ">
          {" "}
          Jewellery
        </h1>
      </div>
      <FeaturesSec />
      <Newsletter />
    </>
  );
}
