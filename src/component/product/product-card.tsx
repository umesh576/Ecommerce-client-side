"use client";

import React from "react";

const ProductCard = () => {
  const products = [
    {
      name: "AI Smart Assistant",
      color: "Black",
      price: "$299",
      image:
        "https://creatie.ai/ai/api/search-image?query=A sleek and modern smart device displayed against a minimalist white background, featuring clean lines and premium materials with subtle reflections&width=400&height=400&orientation=squarish&flag=9f3d1674-9e22-47f7-9b0b-2ad33769b95a",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <div key={index} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img src="mobile.jpg" alt="image" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
