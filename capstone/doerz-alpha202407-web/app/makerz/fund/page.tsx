import { Metadata } from "next";
import React from "react";

type MakerzFundPageProps = {};
export const metadata: Metadata = {
  title: "MakerzFund - Doerz.fun",
  description: "MakerzFund for Doerz.fun",
};
const MakerzFundPage = (props: MakerzFundPageProps) => {
  const handleGetByProgramId = () => {
    console.log("Get By Program Id");
  };

  const handleGetBySymbol = () => {
    console.log("Get By Symbol");
  };

  return <div>MakerzFund</div>;
};

export default MakerzFundPage;
