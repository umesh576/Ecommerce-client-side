import api from "@/axios/api.axios.api";
// import { IoLogIn } from "react-icons/io5";
import { ILogin } from "@/interface/auth.interface";

export const login = async (data: ILogin) => {
  const response = await api.post("/user/login", data);
  console.log(response);
  return response;
};
