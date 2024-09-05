import React from "react";
import { truncateText } from "./truncate";

interface props {
  title: string;
  category: string;
}
export default function Breadcrumb(props: props) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-black/60">
        <li>
          <a href="#" className="block transition  hover:text-gray-700">
            Home
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        {props.title === "no" ? (
          <li>
            <a
              href="#"
              className="block transition text-black hover:text-gray-700"
            >
              {props.category}
            </a>
          </li>
        ) : (
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {props.category}
            </a>
          </li>
        )}

        {props.title === "no" ? (
          ""
        ) : (
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        )}
        {props.title === "no" ? (
          ""
        ) : (
          <li>
            <a
              href="#"
              className="block transition text-black hover:text-gray-700"
            >
              {truncateText(props.title)}
            </a>
          </li>
        )}
      </ol>
    </nav>
  );
}
