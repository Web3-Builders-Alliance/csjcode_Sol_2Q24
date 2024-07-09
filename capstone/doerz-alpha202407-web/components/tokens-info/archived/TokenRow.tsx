import React from "react";
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
import Image from "next/image";
import { formatUSD } from "../../utils/formatNumbers";
import { TOTAL_ASSETS_INDEX } from "./config";
import { TokenInfo } from "./types";

type TokenRowProps = {
  token: TokenInfo;
  allocationPercentageIndex: number;
  displayAllocation: boolean;
};

const TokenRow = ({
  token,
  allocationPercentageIndex,
  displayAllocation,
}: TokenRowProps) => {
  const changeColor24h =
    token.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600";

  const changeColor7d =
    token.price_change_percentage_7d_in_currency > 0
      ? "text-green-600"
      : "text-red-600";

  return (
    <TableRow
      key={token.id}
      className="flex flex-col items-center justify-center mt-4 px-2 py-4 rounded-xl border border-purple-400 md:flex-row"
    >
      <TableCell className="x-space-4 flex w-[250px] flex-row">
        <Image
          className="rounded-xl"
          src={token.image}
          alt={token.name}
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <p className="ml-4 text-xl">{token.name}</p>
          <p className="ml-4 text-lg text-zinc-400 dark:text-zinc-600">
            {token.symbol.toUpperCase()}
          </p>
        </div>
      </TableCell>
      {displayAllocation && (
        <TableCell className="flex w-[150px] flex-col items-center justify-center">
          <p className="text-xl">
            {
              formatUSD(
                TOTAL_ASSETS_INDEX * (allocationPercentageIndex / 100)
              ).split(".")[0]
            }
          </p>
        </TableCell>
      )}
      <TableCell className="flex w-[150px] flex-col items-center justify-center">
        <p className="text-xl">${token.current_price}</p>
      </TableCell>

      <TableCell className="flex w-[150px] flex-col items-center justify-center">
        <p className={`${changeColor24h} text-xl`}>
          {token.price_change_percentage_24h > 0 && "+"}
          {Math.round(token.price_change_percentage_24h * 100) / 100}% (24h)
        </p>
      </TableCell>

      <TableCell className="flex w-[150px] flex-col items-center justify-center">
        <p className={`${changeColor7d} text-xl`}>
          {token.price_change_percentage_7d_in_currency > 0 && "+"}
          {Math.round(token.price_change_percentage_7d_in_currency * 100) / 100}
          % (7d)
        </p>
      </TableCell>
      <TableCell className="flex w-[200px] flex-col items-center justify-center text-xl text-purple-500">
        <p>{token.total_volume}</p>
      </TableCell>
      <TableCell className="flex w-[200px] flex-col items-center justify-center text-sm ">
        <p className="text-xl text-sky-500 dark:text-sky-300">
          {token.market_cap > 0 ? formatUSD(token.market_cap) : "N/A"}
        </p>
      </TableCell>
    </TableRow>
  );
};

export default TokenRow;
