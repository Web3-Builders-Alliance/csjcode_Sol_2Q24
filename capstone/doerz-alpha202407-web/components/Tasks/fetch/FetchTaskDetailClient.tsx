"use client";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useFetchTaskDetail } from "@/hooks/useFetchTaskDetail";
import DisplayTaskDetail from "../display/DisplayTaskDetail";

type FetchTaskDetailClientProps = {
  taskIdName: string;
};

const FetchTaskDetailClient = ({ taskIdName }: FetchTaskDetailClientProps) => {
  const { task, error, fetchTaskDetail } = useFetchTaskDetail(taskIdName);

  // console.log(`taskIdName is ${taskIdName}`);

  useEffect(() => {
    fetchTaskDetail(taskIdName);
  }, []);

  const data = task || null;

  // console.log(`data is ${JSON.stringify(data)}`);

  if (!data) {
    return (
      <div className="flex flex-col h-full w-full flex-col items-center justify-center">
        <div className="mt-36 w-full">
          <div className="text-md text-center text-zinc-700 dark:text-zinc-300">
            LOADING DATA...
          </div>
          <BeatLoader
            className="p-2 text-center text-2xl"
            color="#36d7b7"
            size={25}
          />
          <div className="h-96">{" "}</div>

        </div>
      </div>
    );
  } else if (data) {
    // console.log(`taskIdName is ${taskIdName}`);
    return <DisplayTaskDetail data={data} />;
  }
};

export default FetchTaskDetailClient;
