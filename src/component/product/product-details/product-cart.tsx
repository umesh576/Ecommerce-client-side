"use client";

import React from "react";
import Image from "next/image";
import { IProduct } from "@/interface/auth/product.interface";
import Link from "next/link";
import { GoTrash } from "react-icons/go";

interface IProp {
  product: IProduct;
  wishlist?: boolean;
  handleDelete?: (id: string) => void;
}

const ProductCard: React.FC<IProp> = ({
  product,
  wishlist = false,
  handleDelete,
}) => {
  const { coverImage, price, name, _id } = product;

  return (
    <div className="relative overflow-hidden tracking-wider border border-gray-300 w-fit rounded-xl ml-7 bg-amber-50">
      {/* image */}
      <div className="h-fit w-60 aspect-square p-3 transition-all duration-300 hover:scale-[1.1]">
        <Link href={`/product/${_id}`}>
          <Image
            className="h-full w-full transition-all object-cover duration-300 hover:scale-[1.1]"
            height={1000}
            width={1000}
            src={coverImage.path}
            alt={name}
          />
        </Link>
      </div>
      <div className="p-3">
        <p className="text-[15px] font-bold">{name}</p>
        <span className="text-[15px]">रु.{price.toLocaleString()}</span>
      </div>

      <Link href={`/product/${product._id}`}>
        <button className="cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold hover:scale-[1.1]">
          View Detail
        </button>
      </Link>

      {wishlist && handleDelete && (
        <div
          className="absolute top-2 right-2 z-50 w-fit cursor-pointer"
          onClick={() => handleDelete(product._id)}
        >
          <GoTrash className="text-red-500" size={22} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
