import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function Hero() {
  return (
    <section className="relative bg-[#F2F0F1]  bg-cover  bg-no-repeat ">
      <Image
        alt="Mountains"
        src="../images/banner.svg"
        quality={100}
        fill
        objectFit="cover"
        className="hidden md:block "
      />
      <Image
        className="  hidden md:block absolute left-[93%] 2xl:left-[87%] top-[15%] "
        src="../images/nagma.svg"
        alt="logn"
        width={108}
        height={108}
      />
      <Image
        className=" hidden md:block absolute left-[55%] top-[48%] "
        src="../images/nagma.svg"
        alt="logn"
        width={56}
        height={56}
      />
      <div className=" flex flex-wrap mx-auto max-w-screen-xl px-4 sm:px-6  lg:h-[75vh] xl:[90vh] pt-10 md:pt-20  lg:px-8">
        <div className="max-w-xl sm:max-w-2xl  ltr:sm:text-left rtl:sm:text-right z-10 h-auto ">
          <h1
            className={`${myFont.className} font-bold text-[#000000] md:text-[64px]  text-[36px] pt-0`}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="mt-4 md:mt-8 max-w-lg text-black/60 text-[14px]  md:text-[16px] leading-[22px] ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <div className="mt-8 flex flex-wrap gap-4  text-center">
            <a
              href="#"
              className="block w-full rounded-[62px] bg-[#000000] px-[54px] py-4 text-sm font-medium text-white shadow hover:text-rose-700  sm:w-auto"
            >
              Shop Now
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-8 justify-center  ">
            <div className="border-r-[1px] pr-8 border-r-black/10 ">
              <p
                className={` font-bold text-[#000000] md:text-[40px]  text-[24px] pt-0`}
              >
                200+
              </p>
              <p className="text-black text-[12px] md:text-[16px]  text-opacity-60">
                International Brands
              </p>
            </div>
            <div className="md:border-r-[1px] md:pr-8 border-r-none md:border-r-black/10  ">
              <p
                className={` font-bold text-[#000000] md:text-[40px]  text-[24px] pt-0`}
              >
                2,000+
              </p>
              <p className="text-black text-[12px] md:text-[16px] text-opacity-60">
                High-Quality Products
              </p>
            </div>
            <div className=" md:pr-8 ">
              <p
                className={` font-bold text-black md:text-[40px]  text-[24px] pt-0`}
              >
                30,000+
              </p>
              <p className="text-black text-[12px] md:text-[16px]  text-opacity-60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <Image
          className=" block md:hidden  object-cover  "
          src="../images/banner-sm.svg"
          alt="logn"
          width={420}
          height={464}
          style={{
            maxWidth: "468px",
            maxHeight: "448px",
          }}
        />
        <Image
          className=" block md:hidden  absolute right-[5%] top-[9%] "
          src="../images/nagma.svg"
          alt="logn"
          width={76}
          height={76}
        />
        <Image
          className=" block md:hidden  absolute left-[8%] top-[30%] "
          src="../images/nagma.svg"
          alt="logn"
          width={44}
          height={44}
        />
      </div>
    </section>
  );
}
