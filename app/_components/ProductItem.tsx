import Image from "next/image";
import Link from "next/link";
import React from "react";
import product from "../interface/ProductInterface";
import ReactStars from "react-rating-star-with-type";
import { useRouter } from "next/navigation";
import { truncateText } from "./truncate";
type props = {
  product: product;
};

export default function ProductItem(props: props) {
  const { product } = props;
  const rating: number | undefined = product.rating?.rate;

  return (
    <Link
      href={`/product/${product?.id}`}
      className="p-1 mt-[40px] border  border-gray hover:border-teal-400  rounded-lg hover:border hover:shadow-md hover:cursor-pointer md-min-w-[250px]"
    >
      <Image
        src={product?.image}
        alt="banner-card"
        width={400}
        height={400}
        className="rounded-t-lg h-[170px] object-contain "
      />
      <div className="flex items-center justify-between p-3 rounded-b-lg  bg-gray-50">
        <div className="">
          <p className="text-[20px] font-bold line-clamp-1 text-black">
            {truncateText(product.title || "bn")}
          </p>
          <ReactStars value={rating} size={15} />
          <h2 className="text-[24px] text-black font-bold flex  gap-1 items-center">
            ${product?.price}
          </h2>
        </div>
        <h2>{rating}/5</h2>
      </div>
    </Link>
  );
}
