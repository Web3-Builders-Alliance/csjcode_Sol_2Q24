import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { handleFormChange } from "./handleFormChange";
import { State } from "./reducerMakerzTaskFor";

type MakerzTaskCreateScheduleProps = {
  state: State;
  // setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateSchedule = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateScheduleProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* <div className="">Schedule Publishing</div>
        <div className="my-4 flex flex-col">

        </div> */}


      </div>
      <div className="flex flex-col justify-center">
          {/* <hr className="my-2 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" /> */}
          <div className="mt-2 text-center text-sm">Publish Live on:</div>
          <div className=""></div>
          <div className="mt-2 text-center text-sm">Expires on:</div>
          <div className=""></div>
        </div>
    </div>
  );
};

export default MakerzTaskCreateSchedule;
