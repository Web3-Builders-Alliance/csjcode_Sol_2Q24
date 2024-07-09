import FetchMakerzTasks from "@/components/Tasks/makerz/fetch/FetchMakerzTasks";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

const username = "csjcodetest";

type MakerzListPageProps = {};
export const metadata: Metadata = {
  title: "MakerzList - Doerz.fun",
  description: "MakerzList for Doerz.fun",
};
const MakerzListPage = (props: MakerzListPageProps) => {
  return (
    <div className="flex flex-col justify-content items-center">
      <div className="flex flex-row mb-4 ">
        {/* <div>Makerz List</div> */}
        <div className="flex flex-row ml-4 items-center">
          <MdFormatListBulletedAdd className="text-zinc-500" />
          <Link className="ml-2" href="/makerz/create/">
            Create a Task
          </Link>
        </div>
      </div>
      <FetchMakerzTasks username={username} />
    </div>
  );
};

export default MakerzListPage;
