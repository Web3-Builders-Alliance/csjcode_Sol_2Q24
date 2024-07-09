import CreateMakerzTaskForm from "@/components/forms/makerz/task/create/CreateMakerzTaskForm";
import TestForm from "@/components/forms/makerz/task/create/TestForm";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type MakerzCreatePageProps = {};
export const metadata: Metadata = {
  title: "MakerzCreate - Doerz.fun",
  description: "MakerzCreate for Doerz.fun",
};
const MakerzCreatePage = (props: MakerzCreatePageProps) => {
  return (
    <div className="w-full justify-center">
      <CreateMakerzTaskForm />
      {/* <TestForm /> */}
    </div>
  );
};

export default MakerzCreatePage;
