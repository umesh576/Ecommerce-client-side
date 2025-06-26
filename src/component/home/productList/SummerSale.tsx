import React from "react";
import ProductList from "../products-list";
const SummerSale = () => {
  const Products = [
    {
      image: "/logo1",
      name: "Summer sale product",
      price: 230,
    },
    {
      image: "/logo1",
      name: "Summer sale product",
      price: 230,
    },
    {
      image: "/logo1",
      name: "Summer sale product",
      price: 230,
    },
  ];
  return (
    <div>
      <ProductList title="Summer Sale" isLoading={false} products={Products} />
    </div>
  );
};

export default SummerSale;
