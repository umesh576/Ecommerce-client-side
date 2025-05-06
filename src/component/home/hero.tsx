import React from "react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full relative tracking-wider">
      <div className="border border-red-500 h-full absolute inset-0">
        <Image
          src="/hero-3.jpg"
          alt="image"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute z-50 max-w-[700px] top-1/3 px-7">
        <div className="tracking-wider">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="animate-pulse ">Doko bazzar</span>
          </h1>
          <p className=" text-2xl">
            Discover top-quality products, exclusive deals, and a shopping
            experience designed just for you. Whether you are looking for the
            latest trends, everyday essentials, or unique finds, we got
            something for everyone. Shop Now and Enjoy Fast Shipping, Secure
            Payments, and Excellent Customer Service.
          </p>
        </div>
        <div className="mt-7">
          <button className=" px-6 py-4 bg-blue-600 font-bold uppercase rounded-md cursor-pointer hover:text-gray-500 hover:bg-blue-400 transition-all duration-2s text-white animate-bounce">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
