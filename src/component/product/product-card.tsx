"use client";

import React from "react";
import Image from "next/image";
import { IProduct } from "@/interface/product.interface";
import Link from "next/link";

interface Iprop {
  product: IProduct;
}

const ProductCard: React.FC<Iprop> = ({ product }) => {
  console.log("product", product);
  const { coverImage, price, name } = product;
  const products = [{}];
  return (
    <div className="bg-white">
      <div className="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index} className="group relative w-full h-full">
              <div className=" relative w-60 min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md  group-hover:opacity-75 lg:h-80 lg:aspect-none hover:scale-1.2">
                <Image
                  className="w-full h-full "
                  height={1000}
                  width={1000}
                  src={
                    coverImage
                      ? `${process.env.NEXT_PUBLIC_API_BASEURL}/${coverImage}`
                      : "/mobile.jpg"
                  }
                  alt={name}
                />
              </div>
              <div id="umeh" className="mt-4 w-full">
                {/* <div> */}
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {name}
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                {/* </div> */}
                <p className="text-sm font-medium text-gray-900">Rs. {price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full block bg-black text-white">
          <Link href={`product/${product._id}`}>
            <p>view Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
