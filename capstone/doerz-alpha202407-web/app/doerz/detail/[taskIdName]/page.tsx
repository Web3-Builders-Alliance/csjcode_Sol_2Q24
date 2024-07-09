import { Metadata } from "next";
import React from "react";
import data from "@/components/Tables/data/tasks.json";
import FetchTaskDetailClient from "@/components/Tasks/fetch/FetchTaskDetailClient";
import Link from "next/link";
import { AiFillCaretLeft, AiOutlineInbox } from "react-icons/ai";

type DoerzDetailIdPageProps = {
  params: {
    taskIdName: string;
  };
};

export const metadata: Metadata = {
  title: "DoerzDetailId - Doerz.fun",
  description: "DoerzDetailId for Doerz.fun",
};
const DoerzDetailIdPage = ({ params }: DoerzDetailIdPageProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <AiOutlineInbox className="text-zinc-500" />
        <Link className="ml-2" href="/doerz/inbox/">
          Return to Inbox
        </Link>
      </div>
      <FetchTaskDetailClient taskIdName={params.taskIdName} />
    </>
  );
};

export default DoerzDetailIdPage;
