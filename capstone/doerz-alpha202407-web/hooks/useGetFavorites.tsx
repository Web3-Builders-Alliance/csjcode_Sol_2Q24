import { Favorite } from "@/types";
import { useState, useEffect, useCallback } from "react";

interface GetFavoritesResult {
  favorites: Favorite | null;
  isLoading: boolean;
  error: string | null;
}

export const useGetFavorites = (username: string) => {
  // console.log(taskIdName);

  const [result, setResult] = useState<GetFavoritesResult>({
    favorites: null,
    isLoading: false,
    error: null,
  });

  const getFavorites = useCallback(async (taskIdName: string) => {
    console.log(`http://localhost:3000/api/favorites/${username}`);

    setResult((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(`http://localhost:3000/api/favorites/${username}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: Favorite[] = await response.json();
      // console.log(data);

      setResult({
        favorites: data.length ? data[0] : null,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      setResult({ favorites: null, isLoading: false, error: error.message });
    }
  }, []);

  useEffect(() => {
    getFavorites(username);
  }, [getFavorites, username]);


  return { ...result, getFavorites };
};
