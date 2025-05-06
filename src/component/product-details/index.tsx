/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { getProductById } from "@/api/product";
import { useQueries, useQuery } from "@tanstack/react-query";
import { error } from "console";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { isErrored } from "stream";
import ImageSlider from "./image-slider";
// import { Image } from 'next/image';
interface IProps {
  id: string;
}
const product = {
  name: "laptop",
  category: "Elecronic",
  coverImage: "/product/logo.jpg",
  images: "/hero-3.jpg,/hero-3.jpg,/hero-3.jpg",
  price: "10000",
  averageRating: 3.5,
  description: "this is laptop",
};

const ProductDetails: React.FC<IProps> = (id) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["get-product-by-id"],
    queryFn: () => getProductById(id),
  });
  useEffect(() => {
    if (isError) {
      toast.error(error.message ?? "somethind went wrong");
    }
  }, [error, isError]);
  return (
    <div className="px-10 flex gap 10">
      {/* image section */}
      <div className="felx-1">
        image carsoel
        <ImageSlider images={product.images} />
      </div>
      {/* right side */}
      {/* product details */}
      <div className="flex-1">details</div>
    </div>
  );
};

export default ProductDetails;
