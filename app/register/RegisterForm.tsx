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

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        username: data.email,
        password: data.password,
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => toast.success("Account Created"));
    router.push("/cart");
  };
  return (
    <>
      <h1 className={`${myFont.className} font-bold text-[32px]`}>
        {" "}
        Sign up for SHOP.CO
      </h1>
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        {isLoading ? "Loading" : "Sign Up"}
      </div>
      <p className="">
        Already have an account?
        <Link href="/login" className="underline text-[20px]">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
