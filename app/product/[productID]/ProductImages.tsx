"use client";

import React, { useState } from "react";
import { CartProductType } from "./ProductDetails";
import Image from "next/image";
import product from "@/app/interface/ProductInterface";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: product;
}

const ProductImages: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
}) => {
  const [selectImage, setSelectedImage] = useState("");
  return (
    <div
      className="
      flex
      sm:grid
      flex-wrap
  grid-cols-3
  gap-2
  m-4
  h-full
  max-h-[500px]
  min-h-[300px]
  sm:min-h-[400px]
  "
    >
      <div
        className="flex
        w-full
    sm:flex-col
    gap-5
    cursor-pointer
   sm:h-full
   sm:max-h-[500px]
    sm:min-h-[300px]
    order-last
    sm:order-2
    mb-5
    sm:mb-0
   
    "
      >
        <div
          className={`relative w-[80%] aspect-square rounded border-black 
         ${selectImage === "div1" ? "border-[1px]" : "border-none"}
          
       `}
          onClick={() => setSelectedImage("div1")}
        >
          <Image
            src={product?.image}
            alt="loding"
            fill
            className="object-contain"
          />
        </div>
        <div
          className={`relative w-[80%] aspect-square rounded border-black 
         ${selectImage === "div2" ? "border-[1px]" : "border-none"}
          
       `}
          onClick={() => setSelectedImage("div2")}
        >
          <Image
            src={product?.image}
            alt="loding"
            fill
            className="object-contain"
          />
        </div>
        <div
          className={`relative w-[80%] aspect-square rounded border-black 
         ${selectImage === "div3" ? "border-[1px]" : "border-none"}
          
       `}
          onClick={() => setSelectedImage("div3")}
        >
          <Image
            src={product?.image}
            alt="loding"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className=" sm:col-span-2 relative aspect-square w-full sm:order-last ">
        <Image
          src={product?.image}
          alt="lod"
          fill
          className="w-full object-contain h-full max-h-[500px]  min-h-[300px] sm:min-h-[500px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;
