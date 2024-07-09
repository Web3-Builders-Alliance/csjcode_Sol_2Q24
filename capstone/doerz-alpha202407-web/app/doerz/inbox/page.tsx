import { Metadata } from "next";
import React, { useEffect } from "react";
import FetchTasksInboxClient from "@/components/Tasks/fetch/FetchTasksInboxClient";

type DoerzInboxPageProps = {};

export const metadata: Metadata = {
  title: "DoerzInbox - Solana app",
  description: "DoerzInbox Demo for my Solana app",
};
export default async function DoerzInboxPage(props: DoerzInboxPageProps) {

  return (
    <div className="flex flex-col">
      <FetchTasksInboxClient />
    </div>
  );
}
