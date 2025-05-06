import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hsecommerce-p7zn.onrender.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
