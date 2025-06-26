"use client";

import { getProductById } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import ImageSlider from "./product-details/image-slider";
// import ImageSlider from "./product-detail/image-slider";
// import ProductDetails from "./product-details";
import ProductDetails from "./product-details/product-details";
// import ProductDetails from "@/components/product/product-detail/product-details";
// import ReviewCard from "./review/review-card";

import ReviewForm from "../ui/review-form";
import Reviews from "./review/reviews";

interface IProp {
  id: string;
}

const ProductDetail: React.FC<IProp> = ({ id }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["get-product-by-id", id],
    queryFn: () => getProductById(id),
  });

  console.log(isLoading, data);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? "something went wrong");
    }
  }, [error, isError]);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-8.6rem)] w-full flex items-center justify-center">
        <p className="text-2xl font-serif text-orange-500">loading...</p>
      </div>
    );
  }

  console.log(data.data);

  return (
    <div className="px-4 mt-15 sm:px-6 md:px-10 py-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Image + Review */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <ImageSlider images={data?.data?.images} />
          </div>

          <div className="w-full mt-8">
            <ReviewForm productId={id} />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full">
          <ProductDetails product={data?.data} />
          <Reviews productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
