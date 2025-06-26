/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProduct } from "@/interface/auth/product.interface";
import React, { useState } from "react";
import ProductTitle from "./product-title";
// import { QuantityInput } from "@/components/ui/quantity-input";
import { QuantityInput } from "@/component/ui/quantity-input";
import { addToCart } from "@/api/cart";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
// import { addToWishlist } from "@/api/wishlist";
import { addToWishlist } from "@/api/whishlist";

interface IProps {
  product: IProduct;
}

const ProductDetails: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // cart mutation

  const { isPending: addToCartPending, mutate: addToCartMutation } =
    useMutation({
      mutationFn: addToCart,
      mutationKey: ["add-to-cart"],
      onSuccess(data: any) {
        console.log("add to cart", data);
        toast.success(data?.data?.message ?? "Product Added To cart!");
      },
      onError: (err: Error) => {
        toast.error(err?.message ?? "Add to cart failed.");
        console.log(err);
      },
    });

  const addProductToCart = () => {
    addToCartMutation({ productId: product._id, quantity });
  };

  //wishlist mutation

  const { mutate: addToWishlistMutation } = useMutation({
    mutationFn: addToWishlist,
    mutationKey: ["add-to-wishlist"],

    onSuccess: (data: any) => {
      toast.success(data?.message ?? "Product added to wishlist!");
    },

    onError: (err: any) => {
      toast.error(err?.message ?? "Failed to add to wishlist.");
    },
  });

  const addProductToWishlist = () => {
    addToWishlistMutation({ productId: product._id });
  };

  return (
    <div>
      <div className="font-serif">
        <ProductTitle name={product.name} rating={product.averageRating} />
        <p className="text-[20px] tracking-wider mt-5">
          <span className="font-semibold text-[15px]"> रु. </span>
          <span className="font-serif text-black">{product.price}</span>
        </p>
      </div>
      <div className="mt-10 font-serif">
        <p className="mb-2 font-bold">Quantity Input</p>
        <QuantityInput value={quantity} setValue={setQuantity} />
      </div>

      {/* Button */}
      <div className="flex gap-10 mt-10 w-full ">
        <button
          className="px-4 py-2 w-1/2 md:max-w-[300px] rounded-md cursor-pointer text-lg font-bold tracking-wider bg-orange-500 hover:bg-orange-600 text-white "
          onClick={addProductToCart}
          disabled={addToCartPending}
        >
          Add to cart
        </button>
        <button
          className="px-4 py-2 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-400"
          onClick={addProductToWishlist}
        >
          Add to wishlist
        </button>
      </div>

      <div className="mt-6 bg-[#F8FAFC] border border-gray-300 rounded-lg shadow-sm p-6">
        <h1 className="font-bold text-2xl text-gray-800 mb-3">Description</h1>
        <p className="text-base text-gray-700 leading-relaxed text-justify m-0 p-0">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
