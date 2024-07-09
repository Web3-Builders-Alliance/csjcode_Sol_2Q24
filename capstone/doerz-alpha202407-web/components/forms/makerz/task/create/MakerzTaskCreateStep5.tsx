"use client";
import React, { ChangeEvent } from "react";

import { taskTypes } from "@/components/Tables/data/data";
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
import MakerzTaskCreateInstructions from "./MakerzTaskCreateInstructions";
import { Button } from "@/components/ui/button";
import MakerzTaskCreateFunding from "./MakerzTaskCreateFunding";
import MakerzTaskCreateSchedule from "./MakerzTaskCreateSchedule";

type MakerzTaskCreateStep5Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};
4;
const MakerzTaskCreateStep5 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep5Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <label className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Review / Schedule
        </label>

        <div className="flex flex-col items-center justify-center">
          {" "}
          <MakerzTaskCreateSchedule
            state={state}
            // // setValue={setValue}
            dispatch={dispatch}
            register={register}
            handleFormChange={handleFormChange}
            errors={errors}
          />
        </div>
      </div>

      {/* <div className="mt-2 flex w-full flex-col items-center justify-center">
        <div
          className="w-36 cursor-pointer rounded border bg-blue-500 px-4 py-2 text-center text-sm font-medium text-zinc-100"
          onClick={() =>
            dispatch({
              type: "SET_FIELD",
              field: "makerzFormStep",
              value: 4,
            })
          }
        >
          Fund Task
        </div>
      </div> */}

      {state.hasMissingFields && (
        <div className="flex flex-col items-center mt-4">
          <div className="text-red-500">Missing required fields</div>
          <div className="text-red-500">Fill in required fields before submitting</div>
        </div>
      )}

      {!state.hasMissingFields && <Button
        className="my-2  border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
        type="submit"
      >
        Schedule/Publish
      </Button>}
    </>
  );
};

export default MakerzTaskCreateStep5;
