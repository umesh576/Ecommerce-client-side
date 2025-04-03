"use client";
import { ISignUp } from "@/interface/auth.interface";
import { signupSchema } from "@/schemas/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import SelectGenader from "./gender-input";
// import Control from "./../../node_modules/reat-select/dist/declarations/src/components/Control.d";

const SignupPage = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    defaultValues: {
      firstname: "",
      Lastname: "",
      email: "",
      password: "",
      phonenumber: "",
      conformPassword: "",
      gender: {},
    },
    resolver: yupResolver(signupSchema),
    mode: "all",
  });
  console.log(errors);
  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    console.log(data);
  };

  return (
    // <div className="w-[500px] h-[500px] border flex justify-center items-center">
    <div className="w-96 flex justify-center items-center mt-20">
      <form
        action="submit"
        className="p-5 border w-full h-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold tracking-wider inline-block items-center">
            Signup
          </h1>
        </div>
        <div>
          <div className="mt-10 w-full">
            <label htmlFor="name" className=" flex ml-3">
              first Name <FaAsterisk className="text-xs text-red-500" />
            </label>
            <div className="w-full">
              <input
                {...register("firstname")}
                type="text"
                className={`border rounded-2xl pt-2 pb-2 pl-1 w-full${
                  errors.firstname
                    ? "text-red-500 border-red-500"
                    : "text-black border-gray-500"
                }`}
                placeholder="Enter Username"
              />
              {errors?.firstname && (
                <p className="text-xs text-red-500">
                  {errors?.firstname.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="Lastname" className=" flex ml-3">
              User Lastname <FaAsterisk className="text-xs text-red-500" />
            </label>
            <div>
              <input
                {...register("Lastname")}
                type="text"
                name="Lastname"
                className={`border rounded-2xl pt-2 pb-2 pl-1 w-full${
                  errors.Lastname
                    ? "text-red-500 border-red-500"
                    : "text-black border-gray-500"
                }`}
                placeholder="Enter UserLastname"
              />
              {errors?.Lastname && (
                <p className="text-xs text-red-500">
                  {errors?.Lastname.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="Email" className="flex ml-3">
              Email <FaAsterisk className="text-xs text-red-500" />
            </label>
            <div>
              <input
                {...register("email")}
                name="email"
                className={` border rounded-2xl pt-2 pb-2 text-black pl-1 w-full ${
                  errors.email
                    ? "text-red-500 border-red-500"
                    : "text-black border-gray-500"
                }`}
                placeholder="jhon@gmail.com"
              />
              {errors?.email && (
                <p className="text-xs text-red-500">{errors?.email.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="password" className=" flex ml-3">
              Password <FaAsterisk className="text-xs text-red-500" />
            </label>
            <div>
              <input
                type="password"
                {...register("password")}
                name="password"
                placeholder="Enter password: "
                className={` border rounded-2xl pt-2 pb-2 text-black pl-1 w-full ${
                  errors.email
                    ? "text-red-500 border-red-500"
                    : "text-black border-gray-500"
                }`}
              />
              {errors?.password && (
                <p className="text-xs text-red-500">
                  {errors?.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="conformPassword" className=" flex ml-3">
              conformPassword <FaAsterisk className="text-xs text-red-500" />
            </label>
            <div>
              <input
                type="password"
                {...register("conformPassword")}
                name="conformPassword"
                placeholder="Enter conformPassword: "
                className={` border rounded-2xl pt-2 pb-2 text-black pl-1 w-full ${
                  errors.email
                    ? "text-red-500 border-red-500"
                    : "text-black border-gray-500"
                }`}
              />
              {errors?.conformPassword && (
                <p className="text-xs text-red-500">
                  {errors?.conformPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <SelectGenader control={control} />
          </div>
          <div className="mt-4">
            <label htmlFor="phonenumber" className="flex ml-3">
              phonenumber <FaAsterisk className="text-xs text-red-500" />
            </label>
            <input
              {...register("phonenumber")}
              name="phonenumber"
              className={` border rounded-2xl pt-2 pb-2 text-black pl-1 w-full${
                errors.phonenumber
                  ? "text-red-500 border-red-500"
                  : "text-black border-gray-500"
              }`}
              placeholder="Enter your phone number:"
            />
            {errors?.phonenumber && (
              <p className="text-xs text-red-500">
                {errors?.phonenumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className=" bg-blue-500 text-white text-2xl w-full rounded-2xl pt-2 pb-2 cursor-pointer "
          >
            Submit
          </button>
        </div>
        <div>
          <p>
            If already have a account?{" "}
            <Link href={"/login"}>
              {" "}
              <span className="text-blue-900 cursor-pointer">Login</span>{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
