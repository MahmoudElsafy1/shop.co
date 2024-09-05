import Image from "next/image";
import React from "react";

export default function BrandBanner() {
  return (
    <div className=" bg-black  h-[122px]  ">
      <div className="flex gap-x-[40px]  lg:gap-x-[106px] justify-center   h-[122px] flex-wrap mx-auto max-w-screen-xl">
        <Image
          src="../images/versha.svg"
          alt="brandlogo"
          width={0}
          height={0}
          priority={true}
          className=" w-[116px] lg:w-[165px] min-h-[32px]"
          //   style={{
          //     minWidth: "116px",
          //     minHeight: "32px",
          //   }}
          objectFit="cover"
        />
        <Image
          src="../images/zara-logo.svg"
          alt="brandlogo"
          className=" w-[63px] lg:w-[91px] min-h-[32px] object-contain"
          width={0}
          priority={true}
          height={0}
        />
        <Image
          src="../images/gucci-logo.svg"
          alt="brandlogo"
          className=" w-[109px] lg:w-[156px] min-h-[32px] object-contain"
          width={0}
          priority={true}
          height={0}
        />
        <Image
          src="../images/prada-logo.svg"
          alt="brandlogo"
          className=" w-[120px] lg:w-[194px] min-h-[32px]  object-contain"
          width={0}
          height={0}
          priority={true}
        />
        <Image
          src="../images/clvain.svg"
          className=" w-[134px] lg:w-[205px] min-h-[32px] object-contain"
          alt="brandlogo"
          width={0}
          height={0}
          priority={true}
        />
      </div>
    </div>
  );
}
