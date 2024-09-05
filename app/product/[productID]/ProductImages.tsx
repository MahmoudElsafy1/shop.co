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
      className="grid
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
    flex-col
    gap-5
    cursor-pointer
    h-full
    max-h-[500px]
    min-h-[300px]
    sm:min-h-[400px]
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
      <div className="col-span-2 relative aspect-square">
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
