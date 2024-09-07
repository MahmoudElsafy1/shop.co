"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import localFont from "next/font/local";
import SearchBar from "./SearchBar";
import { BiSearch } from "react-icons/bi";

//👇 Configure our local font object
const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showSearch, setshowSearch] = useState<boolean>(false);
  return (
    <header className="bg-white   ">
      <div className="mx-auto flex  max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-7 h-[48px] mt-6   border-b-[1px] border-b-black/10 pb-[24px] ">
        <button
          onClick={() => setShowNav(!showNav)}
          className="block rounded bg-transparent p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Link href="/" className={`${myFont.className} font-bold text-[32px]`}>
          SHOP.CO
        </Link>

        <div className="flex flex-1 items-center justify-end w-4/5 md:justify-between h-[48px]">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 ">
              <li className="text-black">
                <details className="dropdown">
                  <summary className="flex cursor-pointer ">
                    Shop
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
              </li>

              <li>
                <a
                  className="text-black  transition hover:text-gray-500/75"
                  href="#"
                >
                  On Sale
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-gray-500/75"
                  href="#"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-gray-500/75"
                  href="#"
                >
                  Brands
                </a>
              </li>
            </ul>
          </nav>
          <SearchBar />

          <div className="flex items-center gap-4">
            <div className="flex sm:gap-4">
              {/* <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                Register
              </a> */}
              <button onClick={() => setshowSearch(!showSearch)}>
                <Image
                  className=" block     md:hidden"
                  src="../images/search.svg"
                  alt="logn"
                  height={25}
                  width={25}
                />
              </button>
              <Link href="/cart">
                <Image
                  className="ms-2"
                  src="../images/cart.svg"
                  alt="cart"
                  height={25}
                  width={25}
                />
              </Link>
              <Link href="/">
                <Image
                  className="ms-2"
                  src="../images/logn.svg"
                  alt="logn"
                  height={25}
                  width={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden  ${
          showNav ? " pb-4 px-5 " : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/" className="py-3 inline-block w-full ">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className="py-3 inline-block w-full ">
              Filters
            </a>
          </li>
          <li>
            <a href="/myproducts" className="py-3 inline-block w-full ">
              My Product
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`md:hidden ${
          showSearch ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </header>
  );
}
