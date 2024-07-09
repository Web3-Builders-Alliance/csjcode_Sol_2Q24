"use client";
import React, { ChangeEvent, Dispatch, useEffect, useReducer } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { taskTypes } from "@/components/Tables/data/data";

import { Action, State } from "./reducerMakerzTaskFor";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Button } from "@/components/ui/button";

type MakerzTaskCreateStep1Props = {
  state: State;
  setValue: UseFormSetValue<FieldValues>;
  dispatch: Dispatch<Action>;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// export function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's animated by default, but you can disable it if you prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }



const MakerzTaskCreateStep1 = ({
  dispatch,
  handleFormChange,
  register,
}: MakerzTaskCreateStep1Props) => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col my-4 mr-2">
        <label className="pb-1 text-sm text-zinc-600 dark:text-zinc-400">
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
          <SelectContent  className="w-full">
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
      <div className="items-content flex w-full flex-row justify-center">
        <Button
          className="w-40 rounded border bg-blue-500 px-4 py-1 text-center text-zinc-100 hover:bg-blue-600"
          // type="submit"
          type="button"
          onClick={() =>
            dispatch({
              type: "SET_FIELD",
              field: "makerzFormStep",
              value: 2,
            })
          }
        >
          Task Type
        </Button>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-medium">Ownership</h3>
        <p className="font-light">
          Create a task that rewards users with ownership tokens.
        </p>
      </div>
      <div className="mt-4 text-zinc-500">
        <h3 className="text-md font-medium">Onboarding</h3>
        <p className="font-light">
          Create a task incentivizes users to learn more when joining your app
          and community.
        </p>
      </div>
    </div>
  );
};

export default MakerzTaskCreateStep1;
