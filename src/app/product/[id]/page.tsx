// import React, { useEffect } from "react";
// import { getProductById } from "@/api/product";
// import { useQuery } from "@tanstack/react-query";

import ProductDetails from "@/component/product-details";

interface IPros {
  params: {
    id: string;
  };
}
const DynamicProduct: React.FC<IPros> = async ({ params }) => {
  const { id } = await params;
  console.log("id", id);
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default DynamicProduct;
