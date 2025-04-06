import React from "react";
import ProductList from "../productList";

const TrendingProduct = () => {
  const products = [
    {
      image: "/logo",
      name: "trending product",
      price: 230,
    },
    {
      image: "/logo",
      name: "trending product",
      price: 230,
    },
    {
      image: "/logo",
      name: "trending product",
      price: 230,
    },
  ];
  return (
    <div>
      <ProductList title="Trending Product" products={products} />
    </div>
  );
};

export default TrendingProduct;
