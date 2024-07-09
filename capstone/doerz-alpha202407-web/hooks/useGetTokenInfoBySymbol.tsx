import { useState, useEffect, useCallback } from "react";

interface TokenInfo {
  // Define the structure of the token information based on your API response
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
}

interface TokenPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels: string[];
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns: {
    m5: {
      buys: number;
      sells: number;
    };
    h1: {
      buys: number;
      sells: number;
    };
    h6: {
      buys: number;
      sells: number;
    };
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    h24: number;
    h6: number;
    h1: number;
    m5: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity: {
    usd: number;
    base: number;
    quote: number;
  };
  fdv: number;
  pairCreatedAt: number;
  info: {
    imageUrl: string;
    websites: {
      label: string;
      url: string;
    }[];
    socials: {
      type: string;
      url: string;
    }[];
  };
}

interface TokenInfoResponse {
  schemaVersion: string;
  pairs: TokenPair[];
}

// interface FetchResult {
//   tokenInfo: TokenInfoResponse | null;
//   isLoading: boolean;
//   error: string | null;
// }


interface FetchResult {
  tokenInfo: any;
  // TokenInfoResponse | null;
  isLoading: boolean;
  error: string | null;
}

export const useGetTokenInfoBySymbol = (query: string) => {
  const [result, setResult] = useState<FetchResult>({
    tokenInfo: null,
    isLoading: false,
    error: null,
  });

  const fetchTokenInfo = useCallback(async (querySymbol: string) => {
    console.log(`http://localhost:3000/api/tokens/info/query-symbol/${querySymbol}`);

    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(`http://localhost:3000/api/tokens/info/query-symbol/${querySymbol}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: TokenInfo = await response.json();
      // console.log(data);

      setResult({
        tokenInfo: data,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ tokenInfo: null, isLoading: false, error: error.message });
    }
  }, []);

  useEffect(() => {
    fetchTokenInfo(query);
  }, [fetchTokenInfo, query]);

  return { ...result, fetchTokenInfo };
};
