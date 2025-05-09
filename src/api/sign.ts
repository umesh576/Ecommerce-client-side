import api from "@/axios/api.axios.api";
import { ISignUp } from "@/interface/auth.interface";

export const Sign = async (data: ISignUp) => {
  const response = await api.post("/user/", {
    ...data,
    gender: data?.gender?.value,
  });
  console.log(response);
  return response;
};
