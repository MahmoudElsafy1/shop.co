"use client";
import localFont from "next/font/local";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../_components/inputs/Input";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
//👇 Configure our local font object
const myFont = localFont({
  src: "../_fonts/Fontspring-DEMO-integralcf-bold.otf",
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // try {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    router.push("/cart");
    // } catch (error) {
    // //   setIsLoading(false);
    // //   toast.error("username and password are Wrong");
    // }
  };
  return (
    <>
      <h1 className={`${myFont.className} font-bold text-[32px]`}>
        {" "}
        Sign in for SHOP.CO
      </h1>
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <div
        className="btn hover:bg-black bg-black text-white w-full mr-2   rounded-full "
        onClick={handleSubmit(onsubmit)}
      >
        {isLoading ? "Loading" : "Login"}
      </div>
      <p className="">
        Do not have an account?
        <Link href="/register" className="underline text-[20px]">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
