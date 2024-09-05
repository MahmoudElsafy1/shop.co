"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }
type props = {
  itemsPerPage: number;
  setPage: any;
  total: number;
};
export default function PaginatedItems(props: props) {
  const pageCount = Math.ceil(props.total / props.itemsPerPage);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e) => props.setPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< "
        renderOnZeroPageCount={null}
        containerClassName="custom-pagination"
        pageLinkClassName="pagination-a rounded-circle"
        activeLinkClassName="active-page text-white"
        pageClassName="mx-2"
      />
    </>
  );
}
