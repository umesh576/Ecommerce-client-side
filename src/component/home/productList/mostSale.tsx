/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import ProductList from "../productList";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "@/api/product";
import toast from "react-hot-toast";

const products = [
  {
    id: "1",
    image: "/logo1",
    name: "trending product",
    price: 230,
  },
  {
    id: "1",
    image: "/logo1",
    name: "trending product",
    price: 230,
  },
  {
    id: "1",
    image: "/logo1",
    name: "trending product",
    price: 230,
  },
];
const TrendingProduct = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["trending-products"],
    queryFn: getAllProduct,
  });
  console.log("trending", data, isPending);
  useEffect(() => {
    if (isError) {
      toast.error(error?.message || "something went wrong");
    }
  }, [error]);
  return (
    <div>
      {
        // isPending ? <p>Loading...</p>
        <ProductList
          title="Trending Product"
          isLoading={isPending}
          products={data?.data?.data?.data ?? []}
        />
      }
    </div>
  );
};

export default TrendingProduct;
