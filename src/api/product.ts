import api from "@/axios/api.axios.api";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProduct = async () => {
  try {
    const response = await api.get("/product");
    return response;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
export const getAllSummerProduct = async () => {
  try {
    const response = await api.get("/product");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
export const getProductById = async () => {
  try {
    const response = await api.get(`/product/:${id}`);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response?.data;
  }
};
