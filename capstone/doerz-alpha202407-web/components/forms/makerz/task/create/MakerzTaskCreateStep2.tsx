"use client";
import React, { ChangeEvent, useEffect } from "react";
import { taskTypes } from "@/components/Tables/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getErrorMessage } from "./CreateMakerzTaskForm";
import { OWNER_ORG } from "./initialConfig";
import { State } from "./reducerMakerzTaskFor";
import FormLabel from "./FormLabel";

type MakerzTaskCreateStep2Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateStep2 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep2Props) => {
  useEffect(() => {
    const requiredFields: Array<keyof State> = [
      "ownershipTokenName",
      "ownershipTokenSymbol",
      "ownershipTokenAddress",
      "ownershipTokenAmount",
      "title",
      "description",
      "taskType",
    ];

    let hasMissingFields = false;

    for (const field of requiredFields) {
      if (!state[field]) {
        hasMissingFields = true;
        break;
      }
    }

    if (state.hasMissingFields !== hasMissingFields) {
      dispatch({
        type: "SET_HAS_MISSING_FIELDS",
        payload: hasMissingFields,
      });
    }
  }, [
    state.ownershipTokenName,
    state.ownershipTokenSymbol,
    state.ownershipTokenAddress,
    state.ownershipTokenAmount,
    state.title,
    state.description,
    state.taskType,
    state.hasMissingFields,
    dispatch,
  ]);

  const handleNextStep = () => {
    if (state.hasMissingFields) {
      return;
    } else {
      dispatch({
        type: "SET_FIELD",
        field: "makerzFormStep",
        value: 3,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col px-4">
        <div className="flex flex-row items-center">
          <div className="mr-2">
            <label className="text-sm text-zinc-600 dark:text-zinc-400">
              Task ID
            </label>
            <Input
              defaultValue={state.taskIdNameShort}
              className="w-[100px]"
              {...register("taskIdName", {
                onChange: (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  >,
                ) => handleFormChange(e),
              })}
            />
          </div>
          <div className="my-4 mr-2">
            <label className="text-sm text-zinc-600 dark:text-zinc-400">
              Task type
            </label>
            <Select
              defaultValue="ownership"
              {...register("taskType")}
              onValueChange={(value) =>
                handleFormChange({
                  target: { name: "taskType", value },
                } as any)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {taskTypes.map((taskType) => (
                    <SelectItem key={taskType.value} value={taskType.value}>
                      {taskType.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {getErrorMessage(errors, "taskIdNameShort")}
          {getErrorMessage(errors, "draft")}
          {getErrorMessage(errors, "taskType")}
        </div>

        {state.taskType === "ownership" && (
          <div>
            <div className="mb-2 flex flex-col items-start justify-start">
              <FormLabel
                labelTitle="Token/Program Address"
                required={true}
                ready={!!state.ownershipTokenAddress}
              />
              <Input
                className="my-1 w-[250px] focus-visible:ring-1"
                {...register("ownershipTokenAddress")}
                onChange={(e) => handleFormChange(e)}
              />
              <div className="mt-2 truncate text-xs text-zinc-400 dark:text-zinc-600">
                Ex: DezXAZ8z7PnrnRJjz3wXBoR..
              </div>
              <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-600">
                Program address of the token user must prove ownership for.
              </p>
            </div>

            <div className="mb-2 flex flex-col items-start justify-start">
              <FormLabel
                labelTitle="Amount to Prove Ownership"
                required={true}
                ready={!!state.ownershipTokenAmount}
              />
              <Input
                className="my-1 w-28 focus-visible:ring-1"
                defaultValue={1}
                {...register("ownershipTokenAmount")}
                onChange={(e) => handleFormChange(e)}
              />
            </div>
            {state.ownershipTokenAddress && (
              <>
                <div className="flex flex-row">
                  <div className="mt-0 flex flex-col items-start">
                    <FormLabel
                      labelTitle="Token Name"
                      required={true}
                      ready={!!state.ownershipTokenName}
                    />
                    <Input
                      {...register("ownershipTokenName")}
                      className="my-1 w-32 focus-visible:ring-1"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </div>
                  <div className="ml-4 mt-0 flex flex-col items-start">
                    <FormLabel
                      labelTitle="Symbol"
                      required={true}
                      ready={!!state.ownershipTokenSymbol}
                    />
                    <Input
                      {...register("ownershipTokenSymbol")}
                      className="my-1 w-20 focus-visible:ring-1"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-col items-start">
                  <FormLabel
                    labelTitle="Task Title"
                    required={true}
                    ready={!!state.title}
                  />
                  <Input
                    className="my-1 focus-visible:ring-1"
                    {...register("title")}
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div className="mt-2 flex flex-col items-start">
                  <FormLabel
                    labelTitle="Task Description"
                    required={true}
                    ready={!!state.description}
                  />
                  <Textarea
                    {...register("description")}
                    className="my-1 h-12 focus-visible:ring-1"
                    minHeight={40}
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div className="flex w-56 flex-row">
                  <div className="my-4 mr-2">
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">
                      Group Owner
                    </label>
                    <Select
                      defaultValue={OWNER_ORG}
                      {...register("ownerGroup")}
                      onValueChange={(value) =>
                        handleFormChange({
                          target: { name: "ownerGroup", value },
                        } as any)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select group owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={OWNER_ORG}>{OWNER_ORG}</SelectItem>
                          <SelectItem value="doerzsitepromos">
                            Doerz.fun Site Rewards
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="my-4 ">
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">
                      Admin Group
                    </label>
                    <Select
                      defaultValue={OWNER_ORG}
                      {...register("ownerAdmin", { required: true })}
                      onValueChange={(value) =>
                        handleFormChange({
                          target: { name: "ownerAdmin", value },
                        } as any)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select group owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={OWNER_ORG}>{OWNER_ORG}</SelectItem>
                          <SelectItem value="doerzsitepromos">
                            Doerz.fun Site Rewards
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {state.hasMissingFields && (
          <div className="flex flex-col items-center">
            <div className="text-red-500">Missing required fields</div>
          </div>
        )}

        <div className="items-content flex w-full flex-row justify-center">
          <Button
            className={`my-2 border-blue-500 bg-blue-500 px-16 text-white hover:bg-blue-600`}
            onClick={handleNextStep}
            type="button"
          >
            Save Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default MakerzTaskCreateStep2;
