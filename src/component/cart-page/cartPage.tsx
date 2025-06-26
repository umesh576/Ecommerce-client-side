/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { deleteCart, getCart, removeItemFromCart } from "@/api/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OrderSummary from "./orderSummary";
import ItemsDetails from "./item.details";
import { useAuth } from "@/context/auth.content";

const CartComponent = () => {
  const { user } = useAuth();
  const [total, setTotal] = useState(0);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-cart-items", user?._id],
    queryFn: () => getCart(user?._id),
    enabled: !!user?._id,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cartItems = data?.data?.items || [];

  //  total price
  useEffect(() => {
    if (cartItems.length > 0) {
      const cartTotal = cartItems.reduce((sum: number, item: any) => {
        const price = Number(item?.product?.price) || 0;
        const quantity = Number(item?.quantity) || 0;
        return sum + price * quantity;
      }, 0);
      setTotal(cartTotal);
    } else {
      setTotal(0);
    }
  }, [cartItems]);

  // Remove item from cart
  const { mutate: removeItem } = useMutation({
    mutationKey: ["remove-cart-item"],
    mutationFn: removeItemFromCart,
    onSuccess: () => {
      toast.success("Product removed from cart");
      refetch();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  // Clear the entire cart
  const { mutate: clearCart } = useMutation({
    mutationKey: ["clear-cart"],
    mutationFn: deleteCart,
    onSuccess: () => {
      toast.success("Cart deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
          <Link href="/products">
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <ItemsDetails
          items={cartItems}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Order Summary */}
        <OrderSummary total={total} />
      </div>
    </div>
  );
};

export default CartComponent;
