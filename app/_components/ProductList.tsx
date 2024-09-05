import React from "react";
import ProductItem from "./ProductItem";
import product from "../interface/ProductInterface";
type props = {
  productList?: product[];
};

export default function ProductList(props: props) {
  return (
    <div className="flex gap-4 item-sale">
      {props.productList?.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
}
