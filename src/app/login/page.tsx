"use client";
import Link from "next/link";
// import LoginPage from "../../component/auth/loginform";
import LoginForm from "@/component/auth/loginform";
const Page = () => {
  return (
    <div className="  flex justify-center items-center inset-shadow-sm ">
      <div className="border inset-shadow-indigo-500 rounded-2xl   flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold tracking-wider inline-block items-center ">
          Login
        </h1>
        <LoginForm />
        <div>
          <p>
            don&apos;t have an account?{" "}
            <Link href={"/signup"}>
              <span className="text-blue-800 cursor-pointer">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
