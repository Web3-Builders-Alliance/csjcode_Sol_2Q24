import { Task } from "@/types";
import { useState, useEffect, useCallback } from "react";

interface FetchResult {
  task: Task | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchTaskDetail = (taskIdName: string) => {
  // console.log(taskIdName);

  const [result, setResult] = useState<FetchResult>({
    task: null,
    isLoading: false,
    error: null,
  });

  const fetchTaskDetail = useCallback(async (taskIdName: string) => {
    console.log(`http://localhost:3000/api/tasks/${taskIdName}`);

    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${taskIdName}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: Task[] = await response.json();
      // console.log(data);

      setResult({
        task: data.length ? data[0] : null,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ task: null, isLoading: false, error: error.message });
    }
  }, []);

  useEffect(() => {
    fetchTaskDetail(taskIdName);
  }, [fetchTaskDetail, taskIdName]);


  return { ...result, fetchTaskDetail };
};
