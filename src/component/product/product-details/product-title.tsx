"use client";

// import React from "react";
// // import { RatingStar } from "@/components/ui/rating-star";
import { RatingStar } from "@/component/ui/rating-star";

interface IProp {
  name: string;
  rating: number;
}

// const ProductTitle: React.FC<IProp> = ({ name, rating }) => {
//   return (
//     <div className="flex items-center gap-10 mt-4">
//       <p className="tracking-wider  font-bold text-3xl">{name}</p>
//       <div className="flex gap-2 items-center font-bold ml-[-25px] font-[times]">
//         <RatingStar rating={Math.ceil(rating)} />
//         <p className="tracking-wider text-sm text-gray-500">({rating})</p>
//       </div>
//     </div>
//   );
// };

// export default ProductTitle;
// const roundToHalf = (num: number) => Math.round(num * 2) / 2;

// const ProductTitle: React.FC<IProp> = ({ name, rating }) => {
//   return (
//     <div className="flex items-center gap-10 mt-4">
//       <p className="tracking-wider font-bold text-3xl">{name}</p>
//       <div className="flex gap-2 items-center font-bold ml-[-25px] font-[times]">
//         <RatingStar rating={roundToHalf(rating)} />
//         <p className="tracking-wider text-sm text-gray-500">({rating})</p>
//       </div>
//     </div>
//   );
// };
const roundToHalf = (num: number) => Math.round(num * 2) / 2;

const ProductTitle: React.FC<IProp> = ({ name, rating }) => {
  const safeRating = roundToHalf(rating);

  console.log("Rounded rating:", safeRating); // ✅ Add this for debug

  return (
    <div className="flex items-center gap-10 mt-4">
      <p className="tracking-wider font-bold text-3xl">{name}</p>
      <div className="flex gap-2 items-center font-bold ml-[-25px] font-[times]">
        <RatingStar rating={safeRating} />
        <p className="tracking-wider text-sm text-gray-500">({rating})</p>
      </div>
    </div>
  );
};

export default ProductTitle;
