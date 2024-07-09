import { Button } from "@/components/ui/button";
import { Task } from "@/types";
import Link from "next/link";
import React from "react";
import { PiHandCoinsLight } from "react-icons/pi";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { handleFavorites } from "../handlers/handleFavorites";
import useLoading from "@/hooks/useLoading";

type TaskDetailActionBarProps = {
  data: Task;
  favorite: boolean;
};

const username = "csjcodetest";

const TaskDetailActionBar = ({ data, favorite }: TaskDetailActionBarProps) => {
  const { loading, withLoading, LoadingIcon } = useLoading();

  const [favoriteNew, setFavoriteNew] = React.useState(favorite);

  const handleToggleFavoriteNew = () => {
    setFavoriteNew(!favoriteNew);
  };

  const handleValidationClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  console.log(`favoriteNew: ${favoriteNew}`);

  return (
    <div>
      {data?.taskIdName && (
        <div className="mt-4 flex flex-row">
          <Link href={`/doerz/validate/${data.taskIdName}`}>
            <Button
              className="bg-blue-500 px-8 hover:bg-blue-600 dark:text-white"
              onClick={() => withLoading(handleValidationClick)}
            >
              {loading && <LoadingIcon />}
              {!loading && <PiHandCoinsLight className="mr-2" size={24} />}
              Validate and Get Rewards
            </Button>
          </Link>
          <div className="ml-1">
            <Button
              onClick={() =>
                handleFavorites(
                  username,
                  data.taskId,
                  data.taskIdName,
                  handleToggleFavoriteNew,
                )
              }
              variant={"ghost"}
              className="text-black dark:text-white"
            >
              {favorite || favoriteNew ? (
                <RxHeartFilled className="mr-1 text-red-500" size={24} />
              ) : (
                <RxHeart className="mr-1" size={24} />
              )}
              Favorite
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetailActionBar;
