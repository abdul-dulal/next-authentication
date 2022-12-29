import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { signup_valided } from "../lib/validaded";
import { signIn, signOut } from "next-auth/react";
const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: signup_valided,
    onSubmit,
  });
  async function onSubmit(values) {}
  const handeGoogle = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
    console.log("click");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="h-10 w-64 border border-black focus:outline-none px-2 block mt-3"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="text-red-700">{formik.errors.email}</div>
        ) : null}
        <div className="flex justify-between h-10 w-64 border border-black focus:outline-none px-2  mt-3">
          <input
            type={`${show ? "text" : "password"}`}
            name="password"
            id="password"
            placeholder="password"
            className=" focus:outline-none"
            {...formik.getFieldProps("password")}
          />
          <span className="flex items-center cursor-pointer">
            <AiOutlineEye onClick={() => setShow(!show)} />
          </span>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <div className="text-red-700">{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          className="h-10 w-64 border border-black focus:outline-none px-2 block mt-3"
        >
          Signup
        </button>
      </form>
      <button
        onClick={handeGoogle}
        className="h-10 w-64 border border-black focus:outline-none px-2 block mt-3"
      >
        Sign with Goggle
      </button>
      <button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000/" })
        }
        className="h-10 w-64 border border-black focus:outline-none px-2 block mt-3"
      >
        Sign with Github
      </button>
      <p className="mt-3">
        You dont have an account?
        <span
          className="ml-2 underline cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Signup
        </span>
      </p>
    </div>
  );
};

export default Login;
