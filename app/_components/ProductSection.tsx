"use client";
import React, { Suspense, useEffect, useState } from "react";
import ProductList from "./ProductList";
import localFont from "next/font/local";
import Link from "next/link";
import product from "../interface/ProductInterface";
import LoadingPage from "./LoadingPage";
import { useRouter } from "next/navigation";
type props = {
  sectionTitle?: string;
  api?: string;
};
//👇 Configure our local font object
const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});
function ProductSection(props: props) {
  const [isLoading, setLoading] = useState(true);

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = async () => {
    await fetch(`https://fakestoreapi.com/products${props.api}`, {
      next: {
        revalidate: 120,
      },
    })
      .then((res) => res.json())
      .then((json) => setProductList(json));
    setLoading(false);
    //   fetch("https://fakestoreapi.com/products?limit=5")
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
  };

  return (
    <div className="px-5 md:px-20  mx-auto  max-w-screen-xl ">
      <h2
        className={`${myFont.className} font-bold text-[48px] text-center pt-10 text-black`}
      >
        {props.sectionTitle}
      </h2>

      {isLoading || !productList ? (
        <LoadingPage />
      ) : (
        <ProductList productList={productList} />
      )}

      <div className="w-full flex justify-center">
        <Link
          href={`/category/jewelery`}
          className="btn w-full md:w-fit rounded-full mt-6  mb-[50px] bg-white  px-16"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default ProductSection;
