import api from "@/axios/api.axios.api";
import { ILogin } from "@/interface/auth.interface";

export const login = async (data: ILogin) => {
  const response = await api.post("/user/login", data);
  console.log(response);
  return response;
};
