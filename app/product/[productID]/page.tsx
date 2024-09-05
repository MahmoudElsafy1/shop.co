"use client";

import { Suspense, useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useParams } from "next/navigation";
import product from "@/app/interface/ProductInterface";
import Loading from "../../loading";
import LoadingPage from "@/app/_components/LoadingPage";

interface Iprams {
  productID: string;
}

export default function Product({ params }: { params: Iprams }) {
  const [productDetails, setProductDetails] = useState<product>();
  const param = useParams();
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   getProductById_();
  // }, []);

  // const getProductById_ = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   await fetch(`https://fakestoreapi.com/products/${param.productID}`)
  //     .then((res) => res.json())
  //     .then((json) => setProductDetails(json));
  // };
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [param.productID]);
  const getProductById_ = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch(`https://fakestoreapi.com/products/${param.productID}`, {
      next: {
        revalidate: 120,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProductDetails(json);
        getProductListByCategory(json);
        setLoading(false);
      });
  };
  const getProductListByCategory = async (product: product) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch(
      `https://fakestoreapi.com/products/category/${product?.category}`,
      {
        next: {
          revalidate: 120,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
        setLoading(false);
      });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <ProductDetails
          product={productDetails!}
          productcategry={productList}
        />
      )}
    </div>
  );
}
