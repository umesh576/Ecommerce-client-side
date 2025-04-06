/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "../product/product-card";

interface Iprop {
  title: string;
  products: any[];
}

const ProductList: React.FC<Iprop> = ({
  title = "Most Sale",
  products = [],
}) => {
  return (
    <div className="w-full py-2">
      <div>
        <h1 className="font-bold text-3xl tracking-wider">{title}</h1>
      </div>
      {/* product */}
      <div className="flex gap-2">
        {products.map((product, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
