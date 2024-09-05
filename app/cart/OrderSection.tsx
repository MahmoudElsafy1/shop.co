"use client";
import React from "react";
import { CartProductType } from "../product/[productID]/ProductDetails";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface OrderProps {
  cproducts: CartProductType[];
}
const OrderSection: React.FC<OrderProps> = ({ cproducts }) => {
  const { handleCheckout } = useCart();
  const route = useRouter();
  const totalPrice = cproducts.reduce((total, curVal) => {
    return total + curVal.quantity * Math.floor(curVal.price);
  }, 0);

  console.log(totalPrice);
  function Checkout() {
    handleCheckout();
    toast.success("checkout done");
    route.push("/");
  }

  return (
    <div>
      <p className="font-bold text-[20px] lg:text-[24px] text-black mb-6">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-0 mb-5">
        <p className=" text-[16px] lg:text-[20px] text-black/60">Subtotal</p>
        <p className="text-[16px] lg:text-[20px] text-black font-bold">
          ${totalPrice}
        </p>
      </div>
      <div className="flex justify-between items-center mt-0 mb-5">
        <p className=" text-[16px] lg:text-[20px] text-black/60">
          Discount (-20%)
        </p>
        <p className="text-[16px] lg:text-[20px] text-red-500 font-bold">
          -${Math.floor(totalPrice * 0.2)}
        </p>
      </div>
      <div className="flex justify-between items-center mt-0 mb-5 ">
        <p className=" text-[16px] lg:text-[20px] text-black/60">
          Delivery Fee
        </p>
        <p className="text-[16px] lg:text-[20px] text-black font-bold">$15</p>
      </div>
      <div className="flex justify-between items-center py-5 border-t-[1px] border-t-black/10">
        <p className=" text-[16px] lg:text-[20px] text-black">Total</p>
        <p className="text-[20px] lg:text-[24px] text-black font-bold">
          ${totalPrice - Math.floor(totalPrice * 0.2) + 15}
        </p>
      </div>
      <div className="flex mb-5 gap-3">
        <div className="flex items-center w-2/3 bg-gray-100 p-2 rounded-full ">
          <button>
            <Image
              src="../images/prot.svg"
              alt="img"
              height={20}
              width={20}
              className="object-contain cursor-pointer "
            />
          </button>
          <input
            type="text"
            className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-normal placeholder:text-gray-600 text-[16px]"
            placeholder="Add promo code"
            autoComplete="false"
          />
        </div>
        <div
          className="btn hover:bg-black bg-black text-white font-medium  mr-2 w-1/3  rounded-full "
          onClick={() => {}}
        >
          {" "}
          Apply
        </div>
      </div>

      <div
        className="btn hover:bg-black bg-black text-white font-medium  mr-2 w-full  rounded-full "
        onClick={Checkout}
      >
        {" "}
        Go to Checkout
        <MdArrowForward size={24} />
      </div>
    </div>
  );
};

export default OrderSection;
