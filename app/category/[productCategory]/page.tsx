"use client";

import Breadcrumb from "@/app/_components/Breadcrumb";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import FilterPage from "./FilterPage";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { truncateText } from "@/app/_components/truncate";
import ProductItem from "@/app/_components/ProductItem";
import PaginatedItems from "./PaginationComponent ";
import LoadingPage from "@/app/_components/LoadingPage";

export default function CategoryPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const prams = useParams();
  console.log(prams.productCategory);
  let cate: string = prams.productCategory as string;
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = async () => {
    await fetch("https://fakestoreapi.com/products?limit=9", {
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
              <div className="flex justify-between items-center">
                <p className="font-bold text-[20px] md:text-[32px] text-black">
                  {truncateText(cate)}
                </p>
                <div className="flex items-center gap-x-2">
                  <p className="text-black/60 text-[14px] md:text-[16px]">
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
