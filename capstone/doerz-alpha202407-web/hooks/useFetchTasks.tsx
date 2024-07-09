// useFetchTokensInfo.ts
// import { TaskInfo } from "@/components/TokensInfo/types";
import { Task } from "@/types";
import { useState, useEffect } from "react";

interface FetchResult {
  tasks: Task[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchTasks = () => {
  const [result, setResult] = useState<FetchResult>({
    tasks: null,
    isLoading: false,
    error: null,
  });

  const fetchTasks = async () => {
    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      // const params = new URLSearchParams({
      //   ids: coinIds.join(","),
      //   vs_currency: "usd",
      //   order: "market_cap_desc",
      //   price_change_percentage: "24h,7d",
      // });

      const headers = new Headers({
      });

      const response = await fetch(
        `http://localhost:3003/tasks`,
        {
          method: "GET",
          headers,
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: Task[] = await response.json();
      setResult({
        tasks: data,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ tasks: null, isLoading: false, error: error.message });
    }
  };

  return { ...result, fetchTasks };
};
