import LoginStepper from "@/components/LoginStepper";
import { Metadata } from "next";
import React from "react";


type LoginPageProps = {};
export const metadata: Metadata = {
  title: "Login - Doerz.fun",
  description: "Login for Doerz.fun",
};
const LoginPage = (props: LoginPageProps) => {

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* <div>Login</div> */}
      <div><LoginStepper /></div>
    </div>
  );
};

export default LoginPage;
