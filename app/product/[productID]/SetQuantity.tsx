"use client";
import React from "react";
import { CartProductType } from "./ProductDetails";
interface setQtyProps {
  cartCounter?: boolean;
  widht?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<setQtyProps> = ({
  widht,
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div
      className={`flex gap-8 items-center bg-[#F0F0F0] px-5   rounded-full text-black ${
        widht ? "w-1/3" : "lg:w-full"
      } `}
    >
      <button onClick={handleQtyDecrease} className=" text-[32px]">
        -
      </button>
      <div>{cartProduct.quantity}</div>
      <button className=" text-[32px]" onClick={handleQtyIncrease}>
        +
      </button>
    </div>
  );
};

export default SetQuantity;
