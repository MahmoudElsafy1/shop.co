"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "./LoadingPage";

const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function BrowseSection() {
  const [catagorys, setCategorys] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCategorys();
  }, []);
  const getCategorys = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategorys(json);
        setLoading(false);
      });
  };

  return (
    <div className="md:mx-auto  max-w-screen-xl bg-[#F0F0F0]  rounded-[40px]  mx-[10px] ">
      <h2
        className={`${myFont.className} font-bold text-[48px] text-center pt-10 text-black`}
      >
        BROWSE BY dress STYLE
      </h2>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4  px-3 md:px-[64px] py-[50px]  ">
          <Link href={`/category/${catagorys[2]} `} className="">
            <div className="bg-white  rounded-[20px] flex p-[25px] w-full h-[264px] overflow-hidden relative">
              <p className="font-bold text-black text-[36px] z-10 ">Casual</p>
              <Image
                src="../images/Casual.svg"
                alt="casual"
                fill
                className="w-fit h-full object-cover object-center absolute z-0"
              />
            </div>
          </Link>
          <Link href={`/category/${catagorys[1]} `} className="col-span-2 ">
            <div className="bg-white rounded-[20px] p-[25px]  w-full min-h-[264px] overflow-hidden relative">
              <p className="font-bold text-black text-[36px] absolute z-10 ">
                Formal
              </p>
              <Image
                src="../images/Formal.svg"
                alt="Formal"
                fill
                className="w-full h-full object-cover object-center  absolute  z-0"
              />
            </div>
          </Link>
          <Link
            href={`/category/${catagorys[3]} `}
            className="col-span-2 bg-white  rounded-[20px] p-[25px] w-full  h-[264px] overflow-hidden relative"
          >
            <div className="">
              <p className="font-bold text-black text-[36px] absolute z-10">
                Party
              </p>
              <Image
                src="../images/Party.svg"
                alt="Party"
                fill
                className="w-full h-full object-cover object-center  absolute  z-0"
              />
            </div>
          </Link>
          <Link href={`/category/${catagorys[0]} `}>
            <div className="bg-white rounded-[20px] p-[25px] w-full  h-[264px] overflow-hidden relative">
              <p className="font-bold text-black text-[36px] absolute z-10">
                Gym
              </p>
              <Image
                src="../images/Gym.svg"
                alt="gum"
                fill
                className="w-full h-full object-cover object-center  absolute  z-0"
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
