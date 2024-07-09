
import { Metadata } from "next";
import React from "react";
import GetTokenInfo from "./GetTokenInfo";

type MakerzTokenPageProps = {};
export const metadata: Metadata = {
  title: "MakerzToken - Doerz.fun",
  description: "MakerzToken for Doerz.fun",
};
const MakerzTokenPage = (props: MakerzTokenPageProps) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <GetTokenInfo />
    </div>
  );
};

export default MakerzTokenPage;
