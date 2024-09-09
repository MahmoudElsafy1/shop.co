"use client";

import Breadcrumb from "@/app/_components/Breadcrumb";
import { useParams } from "next/navigation";
import ReactStars from "react-rating-star-with-type";
import React, { useEffect, useState } from "react";
import FilterPage from "./FilterPage";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { truncateText } from "@/app/_components/truncate";
import ProductItem from "@/app/_components/ProductItem";
import PaginatedItems from "./PaginationComponent ";
import LoadingPage from "@/app/_components/LoadingPage";
import Link from "next/link";
import product from "@/app/interface/ProductInterface";

export default function CategoryPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const prams = useParams();
  console.log(prams.productCategory);
  let cate: string = prams.productCategory as string;
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pro, setPro] = useState<product>();
  useEffect(() => {
    getLatestProducts_();
    getLatestProduct();
  }, []);
  const getLatestProducts_ = async () => {
    await fetch("https://fakestoreapi.com/products?limit=8", {
      next: {
        revalidate: 120,
      },
    })
      .then((res) => res.json())
      .then((json) => setProductList(json));
    setLoading(false);
    //   fetch("https://fakestoreapi.com/products?limit=5")
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
  };
  const getLatestProduct = async () => {
    await fetch("https://fakestoreapi.com/products/18", {
      next: {
        revalidate: 120,
      },
    })
      .then((res) => res.json())
      .then((json) => setPro(json));
    setLoading(false);
    //   fetch("https://fakestoreapi.com/products?limit=5")
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
  };

  return (
    <div className="px-5 md:px-9 mt-6  mx-auto  max-w-screen-xl">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Breadcrumb title={"no"} category={cate} />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
            <FilterPage
              mobileFiltersOpen={mobileFiltersOpen || false}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />

            <div className="lg:col-span-3 pt-2 lg:pt-6">
              <div className="flex sm:justify-between gap-2 sm:gap-0 items-center">
                <p className="font-bold text-[19px] md:text-[32px] text-black">
                  {truncateText(cate)}
                </p>
                <div className="flex items-center gap-x-4 sm:gap-x-2">
                  <p className="text-black/60 text-[13px] md:text-[16px]">
                    Showing 1-10 of 100 Products{" "}
                  </p>
                  <p className="text-black/60 hidden lg:block">Sort by:</p>
                  <Menu
                    as="div"
                    className="relative hidden lg:inline-block text-left "
                  >
                    <div>
                      <MenuButton className="group inline-flex justify-center items-center text-[16px] font-medium text-black hover:text-gray-900">
                        Most Popular
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="font-medium text-gray-900 px-4"
                          >
                            type1
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  >
                    <span className="sr-only">Filters</span>
                    <div className="btn rounded-full bg-[#F0F0F0] border-none flex justify-center items-center">
                      <Image
                        className=" "
                        src="../images/filter.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <Link
                  href={`/product/${pro?.id}`}
                  className="p-1 mt-[40px]  rounded-lg hover:border  hover:cursor-pointer md-min-w-[250px]"
                >
                  <Image
                    src={pro?.image!}
                    alt="banner-card"
                    width={400}
                    height={400}
                    className="rounded-t-lg h-[170px] object-contain "
                  />
                  <div className="flex items-center  p-3 rounded-b-lg ">
                    <div className="">
                      <p className="text-[20px] font-bold line-clamp-1 text-black">
                        {truncateText(pro?.title || "bn")}
                      </p>
                      <div className="flex gap-4">
                        <ReactStars value={4} size={15} />
                        <h2>4/5</h2>
                      </div>
                      {/* <h2 className="text-[24px] text-black font-bold flex  gap-1 items-center">
                        ${pro?.price}
                      </h2> */}
                      <div className="flex gap-3  items-center">
                        <p className="text-[20px] sm:text-[24px] text-black font-bold flex  gap-1 items-center ">
                          ${pro?.price}
                        </p>
                        <p className="text-[20px] sm:text-[24px]font-bold text-black/30 line-through">
                          $30
                        </p>
                        <p className="bg-[#FF3333]/30 text-[#FF3333]  flex justify-center items-center h-[20px] sm:h-[28px] text-[10px] rounded-3xl	 p-2">
                          -40%
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                {productList.map((product, i) => {
                  return <ProductItem product={product} key={i} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
