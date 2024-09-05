import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="xl:w-1/2  lg:w-1/3 ">
      <div className="flex items-center  bg-gray-100 p-2 rounded-full max-md:hidden">
        <button>
          <BiSearch size={20} className="opacity-50 " />
        </button>
        <input
          type="text"
          className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-normal placeholder:text-gray-600 text-[16px]"
          placeholder="Search for products..."
          autoComplete="false"
        />
      </div>

      {/* <BiSearch size={20} className=" block     md:hidden" /> */}
    </div>
  );
};

export default SearchBar;
