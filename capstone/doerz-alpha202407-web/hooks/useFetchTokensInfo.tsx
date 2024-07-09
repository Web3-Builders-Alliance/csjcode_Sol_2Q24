// useFetchTokensInfo.ts
import { TokenInfo } from "@/components/tokens-info/types";
import { useState, useEffect } from "react";

// interface TokenInfo {
//   last_updated: boolean | null;
//   id: string;
//   symbol: string;
//   name: string;
//   image: string;
//   current_price: number;
//   market_cap: number;
//   market_cap_rank: number;
//   total_volume: number;
//   high_24h: number;
//   low_24h: number;
//   price_change_24h: number;
//   price_change_percentage_24h: number;
// }

interface FetchResult {
  tokens: TokenInfo[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchTokensInfo = () => {
  const [result, setResult] = useState<FetchResult>({
    tokens: null,
    isLoading: false,
    error: null,
  });

  const fetchTokens = async (coinIds: string[]) => {
    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const params = new URLSearchParams({
        ids: coinIds.join(","),
        vs_currency: "usd",
        order: "market_cap_desc",
        price_change_percentage: "24h,7d",
      });

      const headers = new Headers({
        "X-CG-DEMO-API-KEY": process.env.NEXT_PUBLIC_X_CG_DEMO_API_KEY || "",
      });

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?${params}`,
        {
          method: "GET",
          headers,
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: TokenInfo[] = await response.json();
      setResult({
        tokens: data,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ tokens: null, isLoading: false, error: error.message });
    }
  };

  return { ...result, fetchTokens };
};
