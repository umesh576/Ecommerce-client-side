/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import { ILogin } from "@/interface/auth.interface";
import { ILogin } from "@/interface/auth/auth.interface";
import { loginSchema } from "@/schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  console.log(errors);

  // {mutate, error, isPending}= useMutation({
  const { mutate, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log("response", response);
      toast.success(response.data.message);
      console.log("login sucessfully");
      router.replace("/");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message ?? "login failed");
    },
    // },
  });
  // })

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    console.log(data);
    await mutate(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center md:w-fit"
      >
        <div className="inputFeild m-4">
          <div className="Password p-4 ">
            <div>
              <div className="flex">
                <label htmlFor="email" className="ml-3">
                  Email
                </label>
                <FaAsterisk className="text-xs text-red-500" />
              </div>
            </div>
            <input
              {...register("email")}
              name="email"
              type="email"
              className={` border p-2 rounded-2xl ${
                errors.email ? "border-red-500 text-red-500" : "border-gray-500"
              }`}
              placeholder="jhon@gmail.com"
            />
            {errors?.email && (
              <p className="text-xs text-red-500">{errors?.email.message}</p>
            )}
          </div>
          <div className="Username p-4">
            <div>
              <div className="flex">
                <label htmlFor="password " className="ml-2">
                  Password
                </label>
                <FaAsterisk className="text-xs text-red-500" />
              </div>
            </div>
            <input
              {...register("password")}
              name="password"
              type="text"
              className=" border p-2 rounded-2xl"
              placeholder="Enter password"
            />
            {errors?.password && (
              <p className="text-xs text-red-500">{errors?.password.message}</p>
            )}
          </div>
          <p className=" p-3 text-center">
            <a href="#" className="ForgetPasswword text-blue-900">
              forget password
            </a>
            /<Link href="/signup">Signup</Link>
          </p>
          <div className="Button flex justify-center">
            <button
              disabled={isPending}
              className="border bg-black text-white p-3 w-full rounded-2xl text-1xl cursor-pointer disabled:cursor-not-allowed disabled:bg-black"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
