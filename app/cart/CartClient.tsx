"use client";
import React from "react";
import { useCart } from "../hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Breadcrumb from "../_components/Breadcrumb";
import localFont from "next/font/local";
import Image from "next/image";
import ItemContant from "./ItemContant";
import OrderSection from "./OrderSection";

//👇 Configure our local font object
const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function CartClient() {
  const { cartProducts } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center ">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <Breadcrumb title={"no"} category={"Cart"} />
      <p
        className={`${myFont.className} font-bold text-[40px] mt-2 text-black`}
      >
        Your cart
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-2 lg:gap-3">
        <div className="col-span-4 border-[1px] border-black/10 rounded-[20px] h-fit px-[24px] ">
          {cartProducts &&
            cartProducts.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`grid grid-cols-4 gap-x-4 pb-5  py-[20px]
              ${
                i !== cartProducts.length - 1
                  ? "border-b-[1px] border-black/10"
                  : ""
              }
              `}
                >
                  <ItemContant item={item} />
                </div>
              );
            })}
        </div>
        <div className=" col-span-3 border-[1px] border-black/10 rounded-[20px] py-5 h-fit px-6">
          <OrderSection cproducts={cartProducts} />
        </div>
      </div>
    </>
  );
}
