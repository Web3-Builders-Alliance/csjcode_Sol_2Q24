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
import FormLabel from "./FormLabel";
import DragAndDropImageUpload from "./DragAndDropImageUpload";
import ImageUpload from "./ImageUpload";

type MakerzTaskCreateStep3Props = {
  state: State;
  setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateStep3 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep3Props) => {
  return (
    <>
      <div className="flex flex-col items-center mt-2">
        {/* <FormLabel
          labelTitle="Task Instructions/Content"
          required={false}
          ready={!!state.userInstructions}
        /> */}
        <div className="flex flex-col items-center justify-center">
          {" "}
          <MakerzTaskCreateInstructions
            state={state}
            // setValue={setValue}
            dispatch={dispatch}
            register={register}
            handleFormChange={handleFormChange}
            errors={errors}
          />
        </div>

        <div className="flex flex-col items-center px-4 py-2 text-sm">
          <p>
            <span className="font-bold">Adding instructions and images</span> to
            your task to help participants understand how to complete the task.
          </p>
        </div>
      </div>

      {/* {state.userInstructions.length < 1 && (
        <div className="flex flex-col items-center p-4">
          We recommend adding instructions and images to your task to help
          participants understand how to complete the task.
        </div>
      )} */}

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
          Save Content
        </div>
      </div> */}
      <div className="">
        <ImageUpload dispatch={dispatch} state={state} />
      </div>

      <div className="items-content flex w-full flex-row justify-center">
        <Button
          // className="my-2 border-blue-500 bg-blue-500 px-16 text-white hover:bg-blue-600"
          className="mt-2 rounded border border-blue-600 px-8 text-zinc-800 dark:border-blue-400 dark:text-zinc-200"
          variant="outline"
          type="submit"
          // onClick={() =>
          //   dispatch({
          //     type: "SET_FIELD",
          //     field: "makerzFormStep",
          //     value: 4,
          //   })
          // }
        >
          {/* {state.userInstructions.length > 0 ? "Finished" : "No"} */}
          Continue To Funding
        </Button>
      </div>
      {/* {state.userInstructions.length < 1 && ( */}

      {/* )} */}
    </>
  );
};

export default MakerzTaskCreateStep3;
