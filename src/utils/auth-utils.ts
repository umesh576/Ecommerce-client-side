/* eslint-disable @typescript-eslint/no-explicit-any */

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const getUserIdFromToken = (): string | null => {
  const token = Cookies.get("token");

  console.log("Token from cookies:", token);

  if (!token) {
    console.log("No token found");
    return null;
  }

  try {
    const decodedToken: any = jwtDecode(token);
    console.log("Decoded token:", decodedToken);
    return decodedToken.userId;
  } catch (error) {
    console.log("Error decoding token:", error);
    return null;
  }
};
