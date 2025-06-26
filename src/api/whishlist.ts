// export const addToWishList = async (productId: string) => {
//   try {
//     const response = await api.post(`/wishlist`, { productId });
//     return response?.data;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };

/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";

export const addToWishlist = async ({ productId }: { productId: string }) => {
  try {
    const res = await api.post(`/wishlist/`, { productId });
    return res.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getWishlist = async () => {
  try {
    const res = await api.get(`/wishlist`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteWishlist = async (productId: string) => {
  try {
    const res = await api.delete(`/wishlist/remove/${productId}`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
