/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { StarRating } from "react-flexible-star-rating";
import React from "react";

interface IProp {
  rating: number;
  onChange?: (_: any, value: any) => void;
  edit?: boolean;
}

const roundToHalf = (value: number) => {
  if (typeof value !== "number" || isNaN(value)) return 0;
  return Math.round(value * 2) / 2;
};

export const RatingStar: React.FC<IProp> = ({
  rating,
  edit = false,
  onChange,
}) => {
  const safeRating = roundToHalf(rating);

  return (
    <div className="flex">
      <StarRating
        isReadOnly={!edit}
        dimension={8}
        initialRating={safeRating}
        isHalfRatingEnabled
        onRatingChange={(newRating) => onChange?.(null, newRating)}
      />
    </div>
  );
};
