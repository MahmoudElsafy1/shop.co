"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import PriceSlider from "./Slider";

const colors: any[] = [
  { value: "#00C12B", name: "div1" },
  { value: "#F50606", name: "div2" },
  { value: "#F5DD06", name: "div3" },
  { value: "#F57906", name: "div4" },
  { value: "#06CAF5", name: "div5" },
  { value: "#063AF5", name: "div6" },
  { value: "#7D06F5", name: "div7" },
  { value: "blue", name: "div8" },
  { value: "#FFFFFF", name: "div9" },
  { value: "#000", name: "div10" },
];
const sizes: any[] = [
  { value: "XX-Small", name: "p1" },
  { value: "X-Small", name: "p2" },
  { value: "Small", name: "p3" },
  { value: "Medium", name: "p4" },
  { value: "Large", name: "p5" },
  { value: "X-Large", name: "p6" },
  { value: "XX-Large", name: "p7" },
  { value: "3X-Large", name: "p8" },
  { value: "4X-Large", name: "p9" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
type props = {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
};
export default function FilterPage(props: props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(
    props.mobileFiltersOpen
  );
  const [selectedDiv, setSelectedDiv] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  console.log(props.mobileFiltersOpen);
  return (
    <div className="bg-white hidden lg:block">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={props.mobileFiltersOpen}
          onClose={props.setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative  flex h-full top-[4.5rem] rounded-2xl w-full transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="font-bold text-black text-[20px]">Filters</h2>
                <button
                  type="button"
                  onClick={() => props.setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 px-5">
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 py-6 text-sm font-medium text-gray-900"
                >
                  <li>
                    <div className="flex justify-between">
                      <p>T-shirts</p>
                      <div className="">
                        <Image
                          className=" "
                          src="../images/FrameArrow.svg"
                          alt="logo"
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <p>Shorts</p>
                      <div className="">
                        <Image
                          className=" "
                          src="../images/FrameArrow.svg"
                          alt="logo"
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <p>Shirts</p>
                      <div className="">
                        <Image
                          className=" "
                          src="../images/FrameArrow.svg"
                          alt="logo"
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <p>Hoodie</p>
                      <div className="">
                        <Image
                          className=" "
                          src="../images/FrameArrow.svg"
                          alt="logo"
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <p>Jeans</p>
                      <div className="">
                        <Image
                          className=" "
                          src="../images/FrameArrow.svg"
                          alt="logo"
                          height={16}
                          width={16}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-bold text-black text-[20px]">
                        Price
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6 ">
                    <PriceSlider size={300} />
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-bold text-black text-[20px]">
                        Color
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {/* {colors.map((color, i) => {
                        return (
                          <div
                            key={i}
                            className={`
                              bg-[${color.value}]
                          h-9
                          w-9
                          rounded-full
                         
                          flex
                          items-center
                          justify-center
                          border-[2px]
                          
                          ${
                            selectedDiv === color.name
                              ? " border-teal-300"
                              : "border-black/10 "
                          }
                          
                          `}
                            onClick={() => setSelectedDiv(`${color.name}`)}
                          ></div>
                        );
                      })} */}

                      <div
                        className={`
                 h-9
                 w-9
                 rounded-full
                 
                 border-[2px]
                 flex
                 items-center
                 justify-center
                 bg-[#00C12B]
                 ${
                   selectedDiv === "div2"
                     ? "border-teal-300"
                     : "border-black/10"
                 }
                 
                 `}
                        onClick={() => setSelectedDiv("div2")}
                      ></div>
                      <div
                        className={`
                 h-9
                 w-9
                 rounded-full
                 
                 border-[2px]
                 flex
                 items-center
                 justify-center
                 bg-[#F50606]
                 ${
                   selectedDiv === "div3"
                     ? "border-teal-300"
                     : "border-black/10"
                 }
                 
                 `}
                        onClick={() => setSelectedDiv("div3")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F5DD06]
                    ${
                      selectedDiv === "div1"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div1")}
                      ></div>

                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F57906]
                    ${
                      selectedDiv === "div4"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div4")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#06CAF5]
                    ${
                      selectedDiv === "div5"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div5")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#063AF5]
                    ${
                      selectedDiv === "div6"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div6")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#7D06F5]
                    ${
                      selectedDiv === "div7"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div7")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F506A4]
                    ${
                      selectedDiv === "div8"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div8")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#fff]
                    ${
                      selectedDiv === "div9"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div9")}
                      ></div>
                      <div
                        className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#000]
                    ${
                      selectedDiv === "div10"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                        onClick={() => setSelectedDiv("div10")}
                      ></div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-bold text-black text-[20px]">
                        Size
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="flex gap-2 flex-wrap">
                      {sizes.map((size, i) => {
                        return (
                          <p
                            key={i}
                            className={`btn text-[14px] px-[20px] py-[10px] h-[39px] bg-[#F0F0F0] min-h-[39px] rounded-[62px] hover:bg-black hover:text-white text-black/60  ${
                              selectedSize === `${size.name}`
                                ? " text-white bg-black"
                                : ""
                            } `}
                            onClick={() => setSelectedSize(`${size.name}`)}
                          >
                            {size.value}
                          </p>
                        );
                      })}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-bold text-black text-[20px]">
                        Dress Style
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <ul
                      role="list"
                      className="space-y-4   text-sm font-medium text-gray-900"
                    >
                      <li>
                        <div className="flex justify-between">
                          <p>Casual</p>
                          <div className="">
                            <Image
                              className=" "
                              src="../images/FrameArrow.svg"
                              alt="logo"
                              height={16}
                              width={16}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <p>Formal</p>
                          <div className="">
                            <Image
                              className=" "
                              src="../images/FrameArrow.svg"
                              alt="logo"
                              height={16}
                              width={16}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <p>Party</p>
                          <div className="">
                            <Image
                              className=" "
                              src="../images/FrameArrow.svg"
                              alt="logo"
                              height={16}
                              width={16}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between">
                          <p>Gym</p>
                          <div className="">
                            <Image
                              className=" "
                              src="../images/FrameArrow.svg"
                              alt="logo"
                              height={16}
                              width={16}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>

                <div className="btn hover:bg-black bg-black text-white  w-full   rounded-full ">
                  {" "}
                  Apply Filter
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="">
          <div className="flex items-baseline justify-between ">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <div className="btn rounded-full  flex justify-center items-center">
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
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            {/* Filters */}
            <form className="hidden lg:block border-[1px] border-black/10 rounded-[20px]  px-[24px] py-[20px]">
              <div className="flex justify-between items-center border-b-[1px] border-b-black/10  pb-6 ">
                <p className="font-bold text-black text-[20px]">Filters</p>
                <div className="">
                  <Image
                    className=" "
                    src="../images/FrameFilter.svg"
                    alt="logo"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
              <ul
                role="list"
                className="space-y-4 border-b border-gray-200 py-6 text-sm font-medium text-gray-900"
              >
                <li>
                  <div className="flex justify-between">
                    <p>T-shirts</p>
                    <div className="">
                      <Image
                        className=" "
                        src="../images/FrameArrow.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <p>Shorts</p>
                    <div className="">
                      <Image
                        className=" "
                        src="../images/FrameArrow.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <p>Shirts</p>
                    <div className="">
                      <Image
                        className=" "
                        src="../images/FrameArrow.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <p>Hoodie</p>
                    <div className="">
                      <Image
                        className=" "
                        src="../images/FrameArrow.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <p>Jeans</p>
                    <div className="">
                      <Image
                        className=" "
                        src="../images/FrameArrow.svg"
                        alt="logo"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <Disclosure as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-bold text-black text-[20px]">
                      Price
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <PriceSlider size={200} />
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-bold text-black text-[20px]">
                      Color
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {/* {colors.map((color, i) => {
                        return (
                          <div
                            key={i}
                            className={`
                              bg-[${color.value}]
                          h-9
                          w-9
                          rounded-full
                         
                          flex
                          items-center
                          justify-center
                          border-[2px]
                          
                          ${
                            selectedDiv === color.name
                              ? " border-teal-300"
                              : "border-black/10 "
                          }
                          
                          `}
                            onClick={() => setSelectedDiv(`${color.name}`)}
                          ></div>
                        );
                      })} */}

                    <div
                      className={`
                 h-9
                 w-9
                 rounded-full
                 
                 border-[2px]
                 flex
                 items-center
                 justify-center
                 bg-[#00C12B]
                 ${
                   selectedDiv === "div2"
                     ? "border-teal-300"
                     : "border-black/10"
                 }
                 
                 `}
                      onClick={() => setSelectedDiv("div2")}
                    ></div>
                    <div
                      className={`
                 h-9
                 w-9
                 rounded-full
                 
                 border-[2px]
                 flex
                 items-center
                 justify-center
                 bg-[#F50606]
                 ${
                   selectedDiv === "div3"
                     ? "border-teal-300"
                     : "border-black/10"
                 }
                 
                 `}
                      onClick={() => setSelectedDiv("div3")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F5DD06]
                    ${
                      selectedDiv === "div1"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div1")}
                    ></div>

                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F57906]
                    ${
                      selectedDiv === "div4"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div4")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#06CAF5]
                    ${
                      selectedDiv === "div5"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div5")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#063AF5]
                    ${
                      selectedDiv === "div6"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div6")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#7D06F5]
                    ${
                      selectedDiv === "div7"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div7")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#F506A4]
                    ${
                      selectedDiv === "div8"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div8")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#fff]
                    ${
                      selectedDiv === "div9"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div9")}
                    ></div>
                    <div
                      className={`
                    h-9
                    w-9
                    rounded-full
                    
                    border-[2px]
                    flex
                    items-center
                    justify-center
                    bg-[#000]
                    ${
                      selectedDiv === "div10"
                        ? "border-teal-300"
                        : "border-black/10"
                    }
                    
                    `}
                      onClick={() => setSelectedDiv("div10")}
                    ></div>
                  </div>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-bold text-black text-[20px]">
                      Size
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size, i) => {
                      return (
                        <p
                          key={i}
                          className={`btn text-[14px] px-[20px] py-[10px] h-[39px] min-h-[39px] rounded-[62px] hover:bg-black hover:text-white text-black/60  ${
                            selectedSize === `${size.name}`
                              ? " text-white bg-black"
                              : ""
                          } `}
                          onClick={() => setSelectedSize(`${size.name}`)}
                        >
                          {size.value}
                        </p>
                      );
                    })}
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="py-6">
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-bold text-black text-[20px]">
                      Dress Style
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <ul
                    role="list"
                    className="space-y-4   text-sm font-medium text-gray-900"
                  >
                    <li>
                      <div className="flex justify-between">
                        <p>Casual</p>
                        <div className="">
                          <Image
                            className=" "
                            src="../images/FrameArrow.svg"
                            alt="logo"
                            height={16}
                            width={16}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <p>Formal</p>
                        <div className="">
                          <Image
                            className=" "
                            src="../images/FrameArrow.svg"
                            alt="logo"
                            height={16}
                            width={16}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <p>Party</p>
                        <div className="">
                          <Image
                            className=" "
                            src="../images/FrameArrow.svg"
                            alt="logo"
                            height={16}
                            width={16}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <p>Gym</p>
                        <div className="">
                          <Image
                            className=" "
                            src="../images/FrameArrow.svg"
                            alt="logo"
                            height={16}
                            width={16}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>

              <div className="btn hover:bg-black bg-black text-white  w-full   rounded-full ">
                {" "}
                Apply Filter
              </div>
            </form>

            {/* Product grid */}
          </section>
        </main>
      </div>
    </div>
  );
}
