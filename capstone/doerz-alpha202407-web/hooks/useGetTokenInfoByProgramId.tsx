import { useState, useEffect, useCallback } from "react";

interface TokenInfo {
  // Define the structure of the token information based on your API response
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
}

interface FetchResult {
  tokenInfo: TokenInfo | null;
  isLoading: boolean;
  error: string | null;
}

export const useGetTokenInfoByProgramId = (programId: string) => {
  const [result, setResult] = useState<FetchResult>({
    tokenInfo: null,
    isLoading: false,
    error: null,
  });

  const fetchTokenInfo = useCallback(async (programId: string) => {
    console.log(`https://api.dexscreener.com/latest/dex/tokens/${programId}`);

    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${programId}`, {
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
    fetchTokenInfo(programId);
  }, [fetchTokenInfo, programId]);

  return { ...result, fetchTokenInfo };
};
