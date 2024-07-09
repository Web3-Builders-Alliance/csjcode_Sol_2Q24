"use client";
import { useFetchTokenPrice } from "@/hooks/useFetchTokenPrice";
import React, { useState, useEffect } from "react";

const API_BASE_URL =
  "https://api.coingecko.com/api/v3/simple/token_price/solana";
const DEFAULT_TOKEN_CONTRACT_ADDRESS =
  "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk";

// Define a type for the API response
type CoinGeckoResponse = {
  [key: string]: {
    // The key is the token's CoinGecko ID
    usd: number; // Assuming we're only interested in the USD price
  };
};

const TokenPrice: React.FC = () => {
  const [contractAddress, setContractAddress] = useState(
    DEFAULT_TOKEN_CONTRACT_ADDRESS,
  );
  const { price, isLoading, error, fetchPrice } = useFetchTokenPrice();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchPrice(contractAddress, API_BASE_URL);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1>Fetch Token Price</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="m-2 w-72 dark:text-zinc-900"
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="Enter Contract Address"
        />
        <button className="m-2" type="submit">
          Fetch Price
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching price: {error}</p>}
      {price !== null && <p>The price of the token in USD is: ${price}</p>}
    </div>
  );
};

export default TokenPrice;
