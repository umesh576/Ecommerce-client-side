"use client";
// import ProductDetail from "@/components/product/product-card";
// import ProductDetails from "@/component/product/product-details"
import ProductDetails from "@/component/product/product-details/product-details";
import React from "react";

// interface IProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const Page: React.FC<IProps> = async ({ params }) => {
//   const { id } = await params;
//   return (
//     <div className="w-full lg:max-w-[1440px] lg:mx-auto">
//       <ProductDetails id={someid} />
//     </div>
//   );
// };

// export default Page;

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"; // ✅ use this instead
// import ProductDetails from "@/components/product/product-details";
import { getProductById } from "@/api/product";

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) return <div>Failed to load product</div>;

  return <ProductDetails product={product} />;
};

export default ProductPage;
