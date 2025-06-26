import api from "@/axios/api.axios";
// import { ISignUp } from "@/interface/auth.interface";
import { ISignUp } from "@/interface/auth/auth.interface";

export const Sign = async (data: ISignUp) => {
  const response = await api.post("/user/", {
    ...data,
    gender: data?.gender?.value,
  });
  console.log(response);
  return response;
};
