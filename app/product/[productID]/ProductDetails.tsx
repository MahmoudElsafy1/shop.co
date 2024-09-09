"use client";
import Breadcrumb from "@/app/_components/Breadcrumb";
import product from "@/app/interface/ProductInterface";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import Loading from "../../loading";
import localFont from "next/font/local";
import { truncateText } from "@/app/_components/truncate";
import { MdCheckCircle } from "react-icons/md";
import ReactStars from "react-rating-star-with-type";
import SetQuantity from "./SetQuantity";
import ProductImages from "./ProductImages";
import Image from "next/image";
import ProductSection from "@/app/_components/ProductSection";
import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";
const myFont = localFont({
  src: "../../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export type CartProductType = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
};
type props = {
  product: any;
  productcategry: product[];
};

export default function ProductDetails(props: props) {
  const rating: number | undefined = props.product?.rating.rate;
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const [selectedSize, setSelectedSize] = useState("p2");
  const [selectedDetails, setSelectedDetails] = useState("div2");
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: props.product?.id,
    title: props.product?.title,
    description: props.product?.description,
    category: props.product?.category,
    image: props.product?.image,
    size: "Large",
    color: "Red",
    quantity: 1,
    price: props.product?.price,
  });
  const router = useRouter();

  //   const [productList, setProductList] = useState([]);
  //   console.log(props.product?.category);
  //   useEffect(() => {
  //     getProductListByCategory(props.product!);
  //   }, []);

  //   const getProductListByCategory = async (product: product) => {
  //     if (product?.category !== undefined) {
  //       await fetch(
  //         `https://fakestoreapi.com/products/category/${product?.category}`
  //       )
  //         .then((res) => res.json())
  //         .then((json) => setProductList(json));
  //     }
  //   };

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);
  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === cartProduct.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  return (
    <div className="px-5 md:px-9 mt-6  mx-auto  max-w-screen-xl">
      <Breadcrumb
        title={props.product?.title}
        category={props.product?.category}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <ProductImages product={props.product} cartProduct={cartProduct} />
        <div>
          <h1
            className={`${myFont.className} font-bold text-[24px] md:text-[40px]  text-black`}
          >
            {truncateText(props.product?.title)}
          </h1>
          <div className="flex  ">
            <ReactStars value={rating} size={20} />
            <span className="text-black ml-2">{rating}</span> /5
          </div>
          <div className="flex gap-3  items-center">
            <p className="font-extrabold text-[24px] md:text-[32px] text-black ">
              ${props.product?.price}
            </p>
            <p className="font-extrabold text-[24px] md:text-[32px] text-black/30 line-through">
              $300
            </p>
            <p className="bg-[#FF3333]/30 text-[#FF3333]  flex justify-center items-center h-[34px] rounded-3xl	 p-2">
              -40%
            </p>
          </div>
          <p className="text-[14px] md:texy-[16px] text-black/60 py-5 border-b-[1px] border-b-black/10">
            {props.product?.description}
          </p>

          {isProductInCart ? (
            <>
              <p className="my-8 text-slate-500 flex items-center gap-1">
                <MdCheckCircle className="text-teal-400" size={20} />
                <span>Product added to cart</span>
              </p>
              <div
                className="btn hover:bg-black bg-black text-white  mr-2 w-full  rounded-full "
                onClick={() => {
                  router.push("/cart");
                }}
              >
                {" "}
                View Cart
              </div>
            </>
          ) : (
            <>
              <div className="py-5 border-b-[1px] border-b-black/10">
                <p className="text-[14px] md-text-[16px] pb-3 text-black/60">
                  Select Colors
                </p>
                <div className="flex gap-2">
                  <div
                    className={`
                    h-9
                    w-9
                    rounded-full
                    border-teal-300
                    flex
                    items-center
                    justify-center
                    bg-[#4F4631]
                    ${selectedDiv === "div1" ? "border-[2px]" : "border-none"}
                    
                    `}
                    onClick={() => setSelectedDiv("div1")}
                  ></div>
                  <div
                    className={`
                 h-9
                 w-9
                 rounded-full
                 border-teal-300
                 flex
                 items-center
                 justify-center
                 bg-[#314F4A]
                 ${selectedDiv === "div2" ? "border-[2px]" : "border-none"}
                 
                 `}
                    onClick={() => setSelectedDiv("div2")}
                  ></div>
                  <div
                    className={`
                 h-9
                 w-9
                 rounded-full
                 border-teal-300
                 flex
                 items-center
                 justify-center
                 bg-[#31344F]
                 ${selectedDiv === "div3" ? "border-[2px]" : "border-none"}
                 
                 `}
                    onClick={() => setSelectedDiv("div3")}
                  ></div>
                </div>
              </div>
              <div className="py-5 border-b-[1px] border-b-black/10">
                <p className="text-[14px] md-text-[16px] pb-3 text-black/60">
                  Choose Size
                </p>
                <div className="flex gap-2">
                  <p
                    className={`btn text-[14px] border-none  md-text-[16px] px-4 rounded-3xl hover:bg-black hover:text-white text-black/60 md:px-9 bg-[#F0F0F0] ${
                      selectedSize === "p1" ? " text-white bg-black" : ""
                    } `}
                    onClick={() => setSelectedSize("p1")}
                  >
                    Small
                  </p>
                  <p
                    className={`btn text-[14px] border-none  md-text-[16px] px-4 rounded-3xl hover:bg-black hover:text-white text-black/60 md:px-9 bg-[#F0F0F0]${
                      selectedSize === "p2" ? " text-white bg-black" : ""
                    } `}
                    onClick={() => setSelectedSize("p2")}
                  >
                    Medium
                  </p>
                  <p
                    className={`btn text-[14px] border-none  md-text-[16px] px-4 rounded-3xl hover:bg-black hover:text-white text-black/60 md:px-9 bg-[#F0F0F0]${
                      selectedSize === "p3" ? " text-white bg-black" : ""
                    } `}
                    onClick={() => setSelectedSize("p3")}
                  >
                    Large
                  </p>
                  <p
                    className={`btn text-[14px] md-text-[16px] border-none px-4 rounded-3xl hover:bg-black hover:text-white text-black/60 md:px-9 bg-[#F0F0F0] ${
                      selectedSize === "p4" ? " text-white bg-black" : ""
                    } `}
                    onClick={() => setSelectedSize("p4")}
                  >
                    X-Large
                  </p>
                </div>
              </div>
              <div className="py-5  flex gap-2">
                <SetQuantity
                  cartProduct={cartProduct}
                  handleQtyIncrease={handleQtyIncrease}
                  handleQtyDecrease={handleQtyDecrease}
                  widht={true}
                />
                <div
                  className="btn hover:bg-black bg-black text-white w-2/3 mr-2   rounded-full "
                  onClick={() => handleAddProductToCart(cartProduct)}
                >
                  {" "}
                  Add to Cart
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex pt-10">
        <div
          className={`w-2/5 sm:w-1/3 sm:text-center cursor-pointer  pb-4 text-[16px] sm:text-[20px] ${
            selectedDetails === "div1"
              ? " border-b-[2px] border-black font-medium  text-black"
              : "border-b-[1px] border-black/10 text-black/60 font-normal"
          }`}
          onClick={() => setSelectedDetails("div1")}
        >
          Product Details
        </div>
        <div
          className={`sm:w-1/3 w-2/5 text-center  pb-4 text-[16px] sm:text-[20px] cursor-pointer ${
            selectedDetails === "div2"
              ? " border-b-[2px] border-black font-medium  text-black"
              : "border-b-[1px] border-black/10 text-black/60 font-normal"
          }`}
          onClick={() => setSelectedDetails("div2")}
        >
          Rating & Reviews
        </div>
        <div
          className={`w-1/5 sm:w-1/3 text-right sm:text-center  pb-4 text-[16px] sm:text-[20px] cursor-pointer ${
            selectedDetails === "div3"
              ? " border-b-[2px] border-black font-medium  text-black"
              : "border-b-[1px] border-black/10 text-black/60 font-normal"
          }`}
          onClick={() => setSelectedDetails("div3")}
        >
          FAQs
        </div>
      </div>
      <div className="flex justify-between py-6">
        <div className="font-bold text-black text-[20px] sm:text-[24px] ">
          All Reviews
          <span className="text-black/60 text-[16px] font-normal"> (451)</span>
        </div>
        <div className="flex gap-2">
          <div className="btn rounded-full w-[48px] h-[48px] bg-[#F0F0F0] border-none  flex justify-center items-center">
            <Image
              className=" "
              src="../images/filter.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <div className="hidden sm:block ">
            <details className="dropdown">
              <summary className="flex cursor-pointer gap-2 px-6 btn rounded-full ">
                Latest
                <Image
                  className="ms-2"
                  src="/Vector.svg"
                  alt="logo"
                  height={10}
                  width={10}
                />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
          <div className="btn hover:bg-black bg-black text-white px-7    rounded-full ">
            {" "}
            Write a Review
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-5">
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={4} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Ethan R.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;This t-shirt is a must-have for anyone who appreciates good
            design. The minimalistic yet stylish pattern caught my eye, and the
            fit is perfect. I can see the designer&apos;s touch in every aspect
            of this shirt.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={3.5} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Olivia P.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;As a UI/UX enthusiast, I value simplicity and functionality.
            This t-shirt not only represents those principles but also feels
            great to wear. It&apos;s evident that the designer poured their
            creativity into making this t-shirt stand out.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={4} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Ethan R.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;This t-shirt is a must-have for anyone who appreciates good
            design. The minimalistic yet stylish pattern caught my eye, and the
            fit is perfect. I can see the designer&apos;s touch in every aspect
            of this shirt.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={4} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Ethan R.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;This t-shirt is a must-have for anyone who appreciates good
            design. The minimalistic yet stylish pattern caught my eye, and the
            fit is perfect. I can see the designer&apos;s touch in every aspect
            of this shirt.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={4} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Ethan R.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;This t-shirt is a must-have for anyone who appreciates good
            design. The minimalistic yet stylish pattern caught my eye, and the
            fit is perfect. I can see the designer&apos;s touch in every aspect
            of this shirt.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
        <div className="border-[1px] border-black/10 rounded-[20px] w-full  px-8 py-7">
          <div className="flex justify-between items-center">
            <ReactStars value={4} size={20} inactiveColor={"white"} />
            <div className="font-extrabold text-black/40 text-[30px]">...</div>
          </div>
          <div className="font-extrabold text-black text-[16px] sm:text-[20px] flex gap-1">
            Ethan R.
            <Image
              className=" "
              src="../images/true.svg"
              alt="logo"
              height={20}
              width={20}
            />
          </div>
          <p className=" text-[14px] sm:text-[16px] text-black/60 mt-3 font-normal">
            &quot;This t-shirt is a must-have for anyone who appreciates good
            design. The minimalistic yet stylish pattern caught my eye, and the
            fit is perfect. I can see the designer&apos;s touch in every aspect
            of this shirt.&quot;
          </p>
          <p className="text-[14px] sm:text-[16px] text-black/60 mt-3 font-[600]">
            Posted on August 18, 2023
          </p>
        </div>
      </div>
      <div>
        <ProductSection
          sectionTitle={"You might also like"}
          api={`/category/${props.product?.category}?limit=4`}
        />
      </div>
    </div>
  );
}
