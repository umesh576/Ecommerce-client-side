// import api from "@/axios/api.axios";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const getAllProduct = async () => {
//   try {
//     const response = await api.get("/product");
//     return response;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };
// export const getAllSummerProduct = async () => {
//   try {
//     const response = await api.get("/product");
//     return response.data;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };
// export const getProductById = async () => {
//   try {
//     const response = await api.get(`/product/:${id}`);
//     return response.data;
//   } catch (error: any) {
//     console.log(error);
//     throw error?.response?.data;
//   }
// };

/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/product");
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getAllTrendingProducts = async () => {
  try {
    const response = await api.get("/product");
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getAllSummerSale = async () => {
  try {
    const response = await api.get("/product");
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
