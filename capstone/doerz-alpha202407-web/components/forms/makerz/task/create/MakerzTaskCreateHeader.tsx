import React, { Dispatch } from "react";
import { Action, State } from "./reducerMakerzTaskFor";
import { MdFormatListBulletedAdd } from "react-icons/md";
import {
  PiNumberCircleFive,
  PiNumberCircleFour,
  PiNumberCircleOne,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from "react-icons/pi";
import { FaCircleCheck, FaCaretLeft } from "react-icons/fa6";
import { RxCaretLeft } from "react-icons/rx";

type MakerzTaskCreateHeaderProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

const MakerzTaskCreateHeader = ({
  state,
  dispatch,
}: MakerzTaskCreateHeaderProps) => {
  return (
    <div>
      <div className="flex flex-row w-full items-center justify-center pl-4">
        {/* <MdFormatListBulletedAdd className="text-zinc-500" /> */}
        {/* <div className="mr-2 font-medium">Create Task</div> */}
      </div>
      {/* <div className="my-1 flex flex-row justify-center">
        {state.makerzFormStep < 2 ? (
          <div className="mr-1">
            <PiNumberCircleOne
              className={`${
                state.makerzFormStep === 1
                  ? "text-green-700 dark:text-green-300"
                  : "dark:zinc-600 text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div className="mr-1">
            <FaCircleCheck className="text-green-600 dark:text-green-400" />
          </div>
        )}
        {state.makerzFormStep < 3 ? (
          <div className="mr-1">
            <PiNumberCircleTwo
              className={`${
                state.makerzFormStep === 2
                  ? "text-green-700 dark:text-green-300"
                  : "dark:zinc-600 text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div className="mr-1">
            <FaCircleCheck className="text-green-600 dark:text-green-400" />
          </div>
        )}
        {state.makerzFormStep < 4 ? (
          <div className="mr-1">
            <PiNumberCircleThree
              className={`${
                state.makerzFormStep === 3
                  ? "text-green-700 dark:text-green-300"
                  : "dark:zinc-600 text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div className="mr-1">
            <FaCircleCheck className="text-green-600 dark:text-green-400" />
          </div>
        )}
        {state.makerzFormStep < 5 ? (
          <div className="">
            <PiNumberCircleFour
              className={`${
                state.makerzFormStep === 4
                  ? "text-green-700 dark:text-green-300"
                  : "dark:zinc-600 text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div className="mr-1">
            <FaCircleCheck className="text-green-600 dark:text-green-400" />
          </div>
        )}

        {state.makerzFormStep < 6 ? (
          <div className="">
            <PiNumberCircleFive
              className={`${
                state.makerzFormStep === 5
                  ? "text-green-700 dark:text-green-300"
                  : "dark:zinc-600 text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div className="mr-1">
            <FaCircleCheck className="text-green-600 dark:text-green-400" />
          </div>
        )}
      </div> */}
      {/* {state.makerzFormStep > 1 && (
        <div className="mt-2 flex w-full items-center justify-center text-xs">
          <div
            className="flex cursor-pointer flex-row items-center"
            onClick={() =>
              dispatch({
                type: "SET_FIELD",
                field: "makerzFormStep",
                value: state.makerzFormStep - 1,
              })
            }
          >
            <RxCaretLeft size={22} /> Return to Step {state.makerzFormStep - 1}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MakerzTaskCreateHeader;
