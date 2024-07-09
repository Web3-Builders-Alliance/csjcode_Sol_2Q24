"use client";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useGetTokenInfoByProgramId } from "@/hooks/useGetTokenInfoByProgramId";
import DisplayTokenInfoByProgramId from "../display/DisplayTokenInfoByProgramId";

type GetTokenInfoByProgramIdProps = {
  programId: string;
};

const GetTokenInfoByProgramId = ({ programId }: GetTokenInfoByProgramIdProps) => {
  const { tokenInfo , error, fetchTokenInfo } = useGetTokenInfoByProgramId(programId);

  // console.log(`taskIdName is ${taskIdName}`);

  useEffect(() => {
    fetchTokenInfo(programId);
  }, []);

  const data = tokenInfo || null;

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
    return <DisplayTokenInfoByProgramId data={data} />;
  }
};

export default GetTokenInfoByProgramId;
