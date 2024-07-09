// useFetchTokensInfo.ts
// import { TaskInfo } from "@/components/TokensInfo/types";
import { Task } from "@/types";
import { useState, useEffect } from "react";

interface FetchMakerzResult {
  tasks: Task[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchMakerzTasks = (username:string) => {
  const [result, setResult] = useState<FetchMakerzResult>({
    tasks: null,
    isLoading: false,
    error: null,
  });

  const fetchMakerzTasks = async () => {
    console.log(`http://localhost:3000/api/tasks/makerz/${username}`);

    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const headers = new Headers({
      });

      const response = await fetch(
        `http://localhost:3000/api/tasks/makerz/${username}`,
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

  return { ...result, fetchMakerzTasks };
};
