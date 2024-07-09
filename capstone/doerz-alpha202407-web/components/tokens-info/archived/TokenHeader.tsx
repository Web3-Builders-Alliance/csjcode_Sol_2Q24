import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type TokenHeaderProps = {
  displayAllocation: boolean;
};

const TokenHeader = ({displayAllocation}: TokenHeaderProps) => {
  return (
    <>
      <TableHeader>
      <TableRow className="mt-4 flex flex-col items-center justify-center border-b-0 md:flex-row">
        <TableHead className="w-[250px] items-center justify-center text-center text-xl">
          Token
        </TableHead>
{        displayAllocation && <TableHead className="w-[150px] items-center justify-center text-center text-xl">
          INDEX Assets
        </TableHead>}
        <TableHead className="w-[150px] items-center justify-center text-center text-xl">
          Price
        </TableHead>
        <TableHead className="w-[150px] items-center justify-center text-center text-xl">
          24h
        </TableHead>
        <TableHead className="w-[150px] items-center justify-center text-center text-xl">
          7 days
        </TableHead>
        <TableHead className="w-[200px] items-center justify-center text-center text-xl">
          24h Volume
        </TableHead>
        <TableHead className="w-[200px] items-center justify-center text-center text-xl">
          Mkt Cap
        </TableHead>
      </TableRow>
    </TableHeader>
    </>
  );
}

export default TokenHeader;
