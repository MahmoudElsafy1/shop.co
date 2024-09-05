"use client";
import React from "react";
import { CartProductType } from "../product/[productID]/ProductDetails";
import Link from "next/link";
import Image from "next/image";
import { truncateText } from "../_components/truncate";
import SetQuantity from "../product/[productID]/SetQuantity";
import { useCart } from "../hooks/useCart";
interface ItemContentProps {
  item: CartProductType;
}

const ItemContant: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
  return (
    <>
      <div className="col-span-3 flex gap-2 md:gap-3 justify-self-start">
        <Link href={`/product/${item.id}`}>
          <div className=" relative w-[90px] aspect-square">
            <Image src={item.image} alt="img" fill className="object-contain" />
          </div>
        </Link>
        <div className=" flex flex-col">
          <Link
            href={`/product/${item.id}`}
            className="text-[16px] lg:text-[20px] font-bold text-black"
          >
            {item.title}
          </Link>
          <div className="text-[14px] text-black/60">
            <span className="text-black">Size:</span> {item.size}
          </div>
          <div className="text-[14px] text-black/60">
            <span className="text-black">Color: </span>
            {item.color}
          </div>
          <div className="text-[24px] font-bold text-black">
            ${Math.floor(item.price)}
          </div>
        </div>
      </div>

      <div className="  flex flex-col  items-end justify-between ">
        <Image
          src="../images/dalate.svg"
          alt="img"
          height={24}
          width={24}
          className="object-contain cursor-pointer "
          onClick={() => handleRemoveProductFromCart(item)}
        />

        <SetQuantity
          cartProduct={item}
          cartCounter={true}
          handleQtyDecrease={() => handleCartQtyDecrease(item)}
          handleQtyIncrease={() => handleCartQtyIncrease(item)}
        />
      </div>
    </>
  );
};
export default ItemContant;
