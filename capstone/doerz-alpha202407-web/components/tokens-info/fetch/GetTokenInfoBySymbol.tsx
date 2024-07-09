"use client";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useGetTokenInfoBySymbol } from "@/hooks/useGetTokenInfoBySymbol";
import DisplayTokenInfoBySymbol from "../display/DisplayTokenInfoBySymbol";

type GetTokenInfoBySymbolProps = { symbol: string };

const GetTokenInfoBySymbol = ({symbol}: GetTokenInfoBySymbolProps) => {
  const query = `${symbol}%20SOLANA%20USDC`
  const { tokenInfo , error, fetchTokenInfo } = useGetTokenInfoBySymbol(query);

  useEffect(() => {
    fetchTokenInfo(query);
  }, []);

  const data = tokenInfo || null;

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
    return <DisplayTokenInfoBySymbol data={data} />;
  }
};

export default GetTokenInfoBySymbol;
