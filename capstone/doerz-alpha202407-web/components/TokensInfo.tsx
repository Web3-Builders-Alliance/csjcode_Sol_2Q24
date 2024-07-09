"use client";
import { useFetchTokensInfo } from "@/hooks/useFetchTokensInfo";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { formatUSD } from "@/utils/formatNumbers";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const API_BASE_URL = "https://api.coingecko.com/api/v3/tokens/markets";
const DEFAULT_TOKENS =
  "bonk,dogwifcoin,wen-4,jeo-boden,popcat,slerf,donald-tremp,myro".split(",");

// Define a type for the API response
type CoinGeckoResponse = {
  [key: string]: {
    // The key is the token's CoinGecko ID
    usd: number; // Assuming we're only interested in the USD price
  };
};

type CoinInfo = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // Use string if keeping ISO format, or Date if converting to Date object
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // Use string if keeping ISO format, or Date if converting to Date object
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string; // Use string if keeping ISO format, or Date if converting to Date object
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null; // Specify the type if this can be something other than null
  symbol: string;
  total_supply: number;
  total_volume: number;
};

const TokensInfo = () => {
  const { tokens, isLoading, error, fetchTokens } = useFetchTokensInfo();

  useEffect(() => {
    // Define the coin IDs you want to fetch
    const coinIds = DEFAULT_TOKENS;
    fetchTokens(coinIds);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching tokens: {error}</p>;

  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-2xl">Meme Index Basket</h1>
      </div>
      {tokens && tokens.length > 0 ? (
        <Table className="w-full">
          <TableCaption>Meme coin index.</TableCaption>

          <TableBody className="flex w-full flex-col">
            {tokens.map((token: any) => {
              // console.log(token);
              const changeColor =
                token.price_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-600";
              return (
                <TableRow
                  key={token.id}
                  className="mt-4 flex md:flex-row flex-col rounded-3xl border border-purple-400 p-4"
                >
                  <TableCell className="x-space-4 flex w-[200px] flex-row items-center justify-center">
                    <Image
                      className="rounded-xl"
                      src={token.image}
                      alt={token.name}
                      width={50}
                      height={50}
                    />
                    <p className="ml-4 text-lg">{token.name}</p>
                    <p className="ml-4 text-lg text-zinc-500">
                      {token.symbol.toUpperCase()}
                    </p>
                  </TableCell>
                  {/* <TableCell className="flex flex-row justify-center items-center ml-4 text-lg space-x-4"> */}
                  <TableCell className="flex w-[200px] flex-col items-center justify-center text-2xl text-zinc-500">
                    <p>#{token.market_cap_rank}</p>
                  </TableCell>
                  {/* <TableCell className="w-[15%] flex flex-col justify-center items-center">
                    <p>{token.name}</p>
                    <p className="text-md text-zinc-500">
                      {token.symbol.toUpperCase()}
                    </p>
                  </TableCell> */}
                  <TableCell className="flex w-[200px] flex-col items-center justify-center">
                    <p className="text-xl">${token.current_price}</p>
                  </TableCell>
                  <TableCell className="flex w-[200px] flex-col items-center justify-center">
                    <p className={`${changeColor} text-xl`}>
                      {token.price_change_percentage_24h > 0 && "+"}
                      {Math.round(token.price_change_percentage_24h * 100) /
                        100}
                      % (24h)
                    </p>
                  </TableCell>
                  {/* <TableCell className="flex w-[200px] flex-col items-center justify-center text-sm text-zinc-300">
                    <p className="text-xl">
                      {formatUSD(token.fully_diluted_valuation)} (FDV)
                    </p>
                  </TableCell> */}
                  <TableCell className="flex w-[200px] flex-col items-center justify-center text-sm text-zinc-300">
                    <p className="dark:text-zinc-300 text-zinc-800 text-xl">
                      {formatUSD(token.market_cap)}
                    </p>
                  </TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p>No tokens found.</p>
      )}
    </div>
  );
};

export default TokensInfo;
