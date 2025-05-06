"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "../product/product-card";

interface Iprop {
  isLoading: boolean;
  title: string;
  products: any[];
}

const ProductList: React.FC<Iprop> = ({
  title = "Most Sale",
  products = [],
  isLoading = false,
}) => {
  console.log(products);
  return (
    <div className="w-full py-2">
      <div>
        <h1 className="font-bold text-3xl tracking-wider">{title}</h1>
      </div>
      {/* product */}
      {isLoading && <p>loading...</p>}
      {!isLoading && products.length > 0 && (
        <div className="flex gap-2">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      {!isLoading && products && products.length === 0 && <p>No data found</p>}
    </div>
  );
};

export default ProductList;
