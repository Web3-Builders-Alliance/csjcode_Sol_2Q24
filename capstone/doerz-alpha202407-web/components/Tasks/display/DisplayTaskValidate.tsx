import React, { useEffect } from "react";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineCrown,
} from "react-icons/ai";
import { PiHandCoinsLight } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Task } from "@/types";
import { formatDateTaskDetail } from "@/utils/dates";

import Countdown from "../../Dates/Countdown";
import TaskReward from "./TaskReward";
import TestingReminder from "@/components/messages/TestingReminder";
import DisplayRawData from "@/components/rawdata/DisplayRawData";

type DisplayTaskDetailProps = {
  data: Task | null;
};

type ValidateResult = "none" | "loading" | "success" | "error";

const DisplayTaskDetail = ({ data }: DisplayTaskDetailProps) => {
  const [toggleDateFormat, setToggleDateFormat] = React.useState(false);
  const [validateResult, setValidateResult] =
    React.useState<ValidateResult>("none");

  const handleValidateAction = () => {
    console.log("handleValidateAction");
    setValidateResult("loading");
    setTimeout(() => {
      setValidateResult("success");
    }, 3000);
  };

  const handleToggleDateFormat = () => {
    setToggleDateFormat(!toggleDateFormat);
  };

  const dateCreated = formatDateTaskDetail(data?.dateCreated);
  const dateModified = formatDateTaskDetail(data?.dateModified);
  const dateStarted = formatDateTaskDetail(data?.dateStarted);
  const dateExpired = formatDateTaskDetail(data?.dateExpired);
  // const dateNow = DateTime.now().toFormat("LLL. d, yyyy (h:mm a)");

  const styleValidateSuccess = "bg-green-500 hover:bg-green-500 disabled:bg-green-500 disabled:opacity-100 cursor-not-allowed";
  const styleValidateNone = "bg-blue-500 hover:bg-blue-600";
  const styleValidateLoading = "bg-zinc-500 hover:bg-zinc-600";
  const styleValidateError = "bg-red-500 hover:bg-red-600";

  const getStyleValidateResult = (result: ValidateResult) => {
    switch (result) {
      case "none":
        return styleValidateNone;
      case "loading":
        return styleValidateLoading;
      case "success":
        return styleValidateSuccess;
      case "error":
        return styleValidateError;
    }
  };

  const getButtonIcon = (validateResult: ValidateResult) => {
    switch (validateResult) {
      case "success":
        return <AiOutlineCheckCircle className="mr-2" size={24} />;
      default:
        return <AiOutlineCrown className="mr-2" size={24} />;
    }
  };

  const getButtonText = (
    validateResult: ValidateResult,
    message: string = "Validate and Get Rewards",
  ) => {
    switch (validateResult) {
      case "success":
        return <span>Ownership Validated</span>;
      case "loading":
        return <span>Validating...</span>;
      default:
        return <span>{message}</span>;
    }
  };

  return (
    <div className="w- p-4 md:w-[60%]">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold">{data?.title ?? "n/a"}</h1>{" "}
        <span className="ml-1 border-0 border-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:border-zinc-800">
          {data?.taskIdName ?? "n/a"}
        </span>
      </div>
      <div className="flex flex-col leading-4">
        <div className="flex flex-col">
          <div
            onClick={handleToggleDateFormat}
            className="mr-2 mt-2 text-red-600"
          >
            <span className="font-bold">Expires:</span>{" "}
            {toggleDateFormat ? (
              dateExpired
            ) : (
              <Countdown expires={dateExpired} />
            )}{" "}
          </div>
        </div>
        <div className="mt-4 text-lg font-bold">Description</div>
        <p className="text-lg font-light">{data?.description}</p>
      </div>

      <div className="my-8 flex items-center justify-center">
        <div
          className="my-4 flex w-[300px] flex-col rounded-xl border-2 border-zinc-800
      bg-zinc-100 p-12 dark:bg-zinc-800 md:w-[600px] border-dashed"
        >
          {data?.rewardSize && (
            <div className="flex flex-row items-center justify-center text-center">
              <TaskReward rewardSize={data?.rewardSize} />
            </div>
          )}

          <div className="mt-2 flex flex-row items-center justify-center">
            <Button
              className={`${getStyleValidateResult(validateResult)}  dark:text-white} px-12 py-6 text-lg `}
              onClick={handleValidateAction}
              disabled={validateResult === "success"}
            >
              {getButtonIcon(validateResult)}
              {getButtonText(validateResult, "Check Wallet for Ownership")}
            </Button>
          </div>
          <div className="mt-2 p-2 text-center text-sm text-zinc-800 dark:text-zinc-200">
            After initial user validation, there is a final system check, and if successful rewards will be deposited in your
            wallet typically within 1-3 hours.
          </div>

          {validateResult === "success" && (
            <>
              <div className="flex flex-col items-center justify-center ">
                {" "}
                <hr className="flex h-1 border-t-0 bg-neutral-200 dark:bg-white/10" />
                <div className="">
                  <div className="flex flex-row items-center">
                    <AiOutlineCrown className="text-purple-800 dark:text-purple-400" size="28" /><div className="ml-1 items-center text-sm font-bold text-purple-800 dark:text-purple-400">REWARD PENDING</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="font-bold">Status:</span> Verifying final
                  reward for deposit...
                </div>
              </div>
            </>
          )}
          <hr className="my-2 h-1 border-t-0 bg-neutral-200 dark:bg-white/10" />
          <TestingReminder />
        </div>
      </div>
      <div>
        <Countdown expires={dateExpired} />
      </div>

      <div className="flex flex-row">
        <ul className="mt-4 flex flex-row">
          {data?.tags.map((tag: string) => (
            <li
              className={`mr-2 rounded-xl border border-zinc-500 px-2 py-1 text-xs`}
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
        <span className="mr-2">created: {dateCreated}</span>
        <span className="mr-2">modified: {dateModified}</span>
        <span className="mr-2">started: {dateStarted}</span>
        <span className="mr-2">expires: {dateExpired}</span>
      </div>
      <DisplayRawData data={data} />
    </div>
  );
};

export default DisplayTaskDetail;
