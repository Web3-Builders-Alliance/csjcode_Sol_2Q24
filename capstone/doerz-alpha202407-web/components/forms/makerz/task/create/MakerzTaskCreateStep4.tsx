"use client";
import React, { ChangeEvent } from "react";


import { getErrorMessage } from "./CreateMakerzTaskForm";
import { OWNER_ORG } from "./initialConfig";
import { State } from "./reducerMakerzTaskFor";
import MakerzTaskCreateInstructions from "./MakerzTaskCreateInstructions";
import { Button } from "@/components/ui/button";
import MakerzTaskCreateFunding from "./MakerzTaskCreateFunding";

type MakerzTaskCreateStep4Props = {
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
const MakerzTaskCreateStep4 = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateStep4Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <label className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Task Funding/Bounty
        </label> */}

        <div className="flex flex-col items-center justify-center">
          {" "}
          <MakerzTaskCreateFunding
            state={state}
            // // setValue={setValue}
            dispatch={dispatch}
            register={register}
            handleFormChange={handleFormChange}
            errors={errors}
          />
        </div>
      </div>

     { state.fundingStatus===true && <div className="items-content flex w-full flex-row justify-center">
        <Button
          className="my-2 border-blue-500 bg-blue-500 px-16 text-white hover:bg-blue-600"
          type="submit"
        >
          Fund Task
        </Button>
      </div>}
    </>
  );
};

export default MakerzTaskCreateStep4;
