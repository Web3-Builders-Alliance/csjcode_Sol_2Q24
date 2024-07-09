"use client";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useFetchTaskDetail } from "@/hooks/useFetchTaskDetail";
import DisplayGetFavorites from "./DisplayGetFavorites";
import { useGetFavorites } from "@/hooks/useGetFavorites";

type GetFavoritesProps = {
  username: string;
};

const GetFavorites= ({ username }: GetFavoritesProps) => {
  const { favorites, error, getFavorites } = useGetFavorites(username);

  // console.log(`taskIdName is ${taskIdName}`);

  useEffect(() => {
    getFavorites(username);
  }, []);

  const data = favorites || null;

  // console.log(`data is ${JSON.stringify(data)}`);

  if (!data) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mt-36 w-full">
          <div className="text-md text-center text-zinc-700 dark:text-zinc-300">
            LOADING DATA...
          </div>
          <BeatLoader
            className="p-2 text-center text-2xl"
            color="#36d7b7"
            size={25}
          />
        </div>
      </div>
    );
  } else if (data) {
    // console.log(`taskIdName is ${taskIdName}`);
    return <DisplayGetFavorites data={data} />;
  }
};

export default GetFavorites;
