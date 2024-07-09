import FetchTaskDetailClient from "@/components/Tasks/fetch/FetchTaskDetailClient";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import FetchTaskValidateClient from "@/components/Tasks/fetch/FetchTaskValidateClient";



type DoerzValidatePageProps = {
  params: {
    taskIdName: string;
  };
};
export const metadata: Metadata = {
  title: "DoerzValidate - Doerz.fun",
  description: "DoerzValidate for Doerz.fun",
};
const DoerzValidatePage = ({ params }: DoerzValidatePageProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          {" "}
          <IoDocumentTextOutline className="text-zinc-500" />
          <Link className="ml-1" href={`/doerz/detail/${params.taskIdName}`}>
            Return to Detail page
          </Link>
        </div>

        <div className="flex flex-row items-center ml-4">
          {" "}
          <AiOutlineInbox className="text-zinc-500" />
          <Link className="ml-1" href="/doerz/inbox/">
            Return to Inbox
          </Link>
        </div>
      </div>
      <FetchTaskValidateClient taskIdName={params.taskIdName} />
    </>
  );
};

export default DoerzValidatePage;
