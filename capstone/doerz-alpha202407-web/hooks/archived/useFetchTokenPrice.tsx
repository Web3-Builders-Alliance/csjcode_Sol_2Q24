// useFetchTokenPrice.ts
"use client";
import { useState } from "react";

interface FetchResult {
  price: number | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchTokenPrice = () => {
  const [result, setResult] = useState<FetchResult>({
    price: null,
    isLoading: false,
    error: null,
  });

  const fetchPrice = async (contractAddress: string, urlBase: string) => {
    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const params = new URLSearchParams({
        contract_addresses: contractAddress,
        vs_currencies: "usd",
      });

      const headers = new Headers({
        "X-CG-DEMO-API-KEY": process.env.NEXT_PUBLIC_X_CG_DEMO_API_KEY || "",
      });

      const response = await fetch(`${urlBase}?${params}`, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult({
        price: data[contractAddress].usd, // Assuming the API returns data in this format
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ price: null, isLoading: false, error: error.message });
    }
  };

  return { ...result, fetchPrice };
};
