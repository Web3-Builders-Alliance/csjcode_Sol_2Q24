"use client";
import React, { useEffect, useReducer } from "react";
import { VscOpenPreview } from "react-icons/vsc";
import { initialState, reducer } from "./reducerMakerzTaskFor";
import DisplayRawData from "@/components/rawdata/DisplayRawData";
// import { GiHolosphere } from "react-icons/gi";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Token } from "@solana/spl-token";
import FilterTokenByMint from "@/components/solana-tokens/FilterTokenByMint";
import useSolBalance from "@/hooks/useSolBalance";
import DisplayTaskDetail from "@/components/Tasks/display/DisplayTaskDetail";

type MakerzTaskCreateFormPreviewProps = {
  data: any;
  state: any;
};

const MakerzTaskCreateFormPreview = ({
  data,
  state,
}: MakerzTaskCreateFormPreviewProps) => {
  const {
    title,
    taskIdName,
    taskType,
    description,
    rewardInDOERZ,
    draft,
    ownerGroup,
    ownerAdmin,
  } = data;

  const solBalance = useSolBalance(); // If using separate hook for SOL balance

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  console.log("data", data);


  return (
    <div className="flex w-2/3 flex-col px-2">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row text-center">
          <VscOpenPreview size={18} className="text-zinc-500" />
        </div>

        <div className="ml-1 font-medium">Task Preview</div>
        <div className="ml-2 text-xs text-red-500/70">not saved</div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="my-4">
          <FilterTokenByMint
            tokenMintAddress={
              process.env.NEXT_PUBLIC_DOERZ_TOKEN_MINT_ACCOUNT || ""
            }
          />
        </div>
        solBalance: {solBalance}

        <DisplayTaskDetail data={state} preview={true} />

        {title && (
          <div className="flex flex-col text-xl font-bold">Title: {title}</div>
        )}
        {taskIdName && (
          <div className="text-md flex flex-col font-light">
            taskIdName: {taskIdName}
          </div>
        )}
        {taskType && (
          <div className="text-md flex flex-col font-light">
            taskType: {taskType}
          </div>
        )}
        {description && (
          <div className="text-md flex flex-col font-light">
            description: {description}
          </div>
        )}

        {rewardInDOERZ && (
          <div className="text-md flex flex-col font-light">
            DOERZ rewards:{rewardInDOERZ}
          </div>
        )}
        {draft && (
          <div className="text-md flex flex-col font-light">
            {draft === true ? "DRAFT: Yes" : "DRAFT: No"}
          </div>
        )}
        {ownerGroup && (
          <div className="text-md flex flex-col font-light">
            Group Owner:{ownerGroup}
          </div>
        )}
        {ownerAdmin && (
          <div className="text-md flex flex-col font-light">
            Group Admin:{ownerAdmin}
          </div>
        )}
      </div>

      <DisplayRawData data={state} />

      {/* <GiHolosphere size={100} className="text-emerald-400" /> */}
    </div>
  );
};

export default MakerzTaskCreateFormPreview;
