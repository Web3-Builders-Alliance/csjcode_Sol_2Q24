"use client";
import { useFetchTokensInfo } from "../../hooks/useFetchTokensInfo";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHeader,
} from "@/components/ui/table";
import { DEFAULT_TOKENS_CLIENT, allocationValue } from "./config";
import { BeatLoader } from "react-spinners";
import TokenRow from "./TokenRow";
import { TokenInfo } from "./types";
import TokenHeader from "./TokenHeader";

const tokenIds = DEFAULT_TOKENS_CLIENT;

const tokensWithAllocation = DEFAULT_TOKENS_CLIENT.map((name) => ({
  name: name.trim(),
  allocation: allocationValue,
}));

type TokensInfoProps = {
  displayAllocation: boolean;
};

const TokensInfo = ({ displayAllocation }: TokensInfoProps) => {
  const { tokens, error, fetchTokens } = useFetchTokensInfo();

  useEffect(() => {
    fetchTokens(tokenIds);
  }, []);

  if (error)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="m-8 text-zinc-600 dark:text-zinc-400">
          <p>No data available.</p>
          <p>Error fetching tokens: {error}</p>
        </div>
      </div>
    );

  let allocationPercentageIndex, lastUpdated;

if (tokens && tokens.length > 0 && tokens[0].last_updated) {
  const lastUpdatedValue = tokens[0].last_updated; // Cache the value
  if (typeof lastUpdatedValue === 'string' || typeof lastUpdatedValue === 'number') {
    lastUpdated = new Date(lastUpdatedValue);
  }
}

  // "last updated: N/A"

  return (
    <div className="w-full">
      <div className="flex flex-row w-full">
        <div className="w-1/2 ">
        </div>
      </div>
      {tokens && tokens.length > 0 ? (
        <Table className="flex w-full flex-col">

          <TokenHeader displayAllocation={displayAllocation} />

          <TableBody className="flex w-full flex-col">
            {tokens.map((token: TokenInfo) => {
              allocationPercentageIndex =
                tokensWithAllocation.find((id) => id.name === token.id)
                  ?.allocation || 0;

              return (
                <TokenRow
                  key={token.id}
                  token={token}
                  allocationPercentageIndex={allocationPercentageIndex}
                  displayAllocation={displayAllocation}
                />
              );
            })}
          </TableBody>
          <TableCaption>
            <div className="flex flex-row w-full">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-zinc-400 text-xl text-right">
                Index Portfolio, data as of{" "}
                {lastUpdated ? lastUpdated.toLocaleString() : "N/A"}
              </div>
            </div>
          </TableCaption>
        </Table>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="m-8 text-zinc-600 dark:text-zinc-400">
            Loading Data
          </div>{" "}
          <div>
            <BeatLoader color="#cd80f7" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TokensInfo;
