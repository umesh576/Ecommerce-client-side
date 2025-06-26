"use client";

import { getWishlist, deleteWishlist } from "@/api/wishlist";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import PageLoading from "../ui/page-loading";
import { IProduct } from "@/interface/auth/product.interface";
import ProductCard from "../product/product-detail/product-cart";
import toast from "react-hot-toast";

const Wishlist = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: getWishlist,
    queryKey: ["wishlist"],
  });

  const mutation = useMutation({
    mutationFn: (productId: string) => deleteWishlist(productId),
    onSuccess: () => {
      toast.success("Product removed from wishlist!");
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  if (isLoading) {
    return <PageLoading />;
  }

  if (isError) {
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "Something went wrong!"}
      </div>
    );
  }

  return (
    <div className="px-10">
      <div className="my-4 tracking-wider text-xl flex justify-center font-serif font-2xl">
        <h1>Your wishlist</h1>
      </div>
      <div className="flex flex-wrap">
        {data?.data?.data?.map((product: IProduct) => (
          <ProductCard
            key={product._id}
            wishlist={true}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
