"use client";
import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchemaMakerzForm } from "./schemaForms";

import { State, initialState, reducer } from "./reducerMakerzTaskFor";
import { onSubmit } from "./onSubmit";
import { getInitialValues } from "./initialConfig";
import MakerzTaskCreateStep1 from "./MakerzTaskCreateStep1";
import MakerzTaskCreateHeader from "./MakerzTaskCreateHeader";
import MakerzTaskCreateStep2 from "./MakerzTaskCreateStep2";
import MakerzTaskCreateStep3 from "./MakerzTaskCreateStep3";
import MakerzTaskCreatePreview from "./MakerzTaskCreatePreview";
import MakerzTaskCreateStep4 from "./MakerzTaskCreateStep4";
import MakerzTaskCreateStep5 from "./MakerzTaskCreateStep5";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionMakerzForm";
import {
  PiNumberCircleFive,
  PiNumberCircleFour,
  PiNumberCircleOne,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from "react-icons/pi";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export const getErrorMessage = (errors: any, fieldName: string) => {
  if (errors[fieldName]) {
    return (
      <p className="text-sm text-red-600">
        {errors[fieldName].message as string}
      </p>
    );
  }
  return null;
};

const CreateMakerzTaskForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [accordionOpenDefaultValue, setAccordionOpenDefaultValue] =
    useState<string>("item-1");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm(state.taskType)),
  });

  useEffect(() => {
    setInitialValues();
  }, []);

  const setInitialValues = () => {
    const initialValues = getInitialValues(state);

    Object.entries(initialValues).forEach(([key, value]) => {
      setValue(key as keyof typeof initialValues, value);
    });

    dispatch({ type: "SET_INITIAL_VALUES", payload: initialValues });
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const parsedValue = name === "draft" ? value === "true" : value;
    setValue(name, parsedValue);
    dispatch({
      type: "SET_FIELD",
      field: name as keyof State,
      value: parsedValue,
    });

    if (name === "fundingPool") {
      console.log(`IN Funding pool selected ${name} ${value}`);
      if (value !== "" && value !== "fundingPoolCreate") {
        console.log(`Funding pool selected ${value}`);

        dispatch({
          type: "SET_FIELD",
          field: "fundingStatus",
          value: true,
        });
      } else {
        dispatch({
          type: "SET_FIELD",
          field: "fundingStatus",
          value: false,
        });
      }
    }
  };

  const handleSubmitForm = (data: any) => {
    console.log(`Submitted handleSubmitForm`);

    onSubmit(data, state, dispatch);
  };

  const handleStepChange = (step: number) => {
    dispatch({
      type: "SET_FIELD",
      field: "makerzFormStep",
      value: step,
    });
  };

  useEffect(() => {
    setAccordionOpenDefaultValue(`item-${state.makerzFormStep}`);
  }, [state.makerzFormStep]);

  console.log("state", state);

  const accordionItemClassName = `mb-2 pb-2 border-b-[1px] border-b-zinc-200 dark:border-b-zinc-800`;

  return (
    <div className="mb-4 flex flex-col sm:flex-row">
      <div className="mr-4 flex w-[300px] flex-col items-center border-r border-r-zinc-200 dark:border-r-zinc-800">
        <div className="visible w-full text-center sm:hidden">
          View Task Preview
        </div>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex w-[300px] flex-col justify-start">
            <MakerzTaskCreateHeader dispatch={dispatch} state={state} />

            <div className="ml-2 items-center justify-start">
              <Accordion
                value={accordionOpenDefaultValue}
                type="single"
                collapsible
                className="justify-start"
              >
                <AccordionItem
                  value="item-1"
                  className={accordionItemClassName}
                >
                  <AccordionTrigger
                    className={`flex flex-1 justify-start py-0 font-normal transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180`}
                    onClick={() => handleStepChange(1)}
                  >
                    {state.makerzFormStep < 2 ? (
                      <div className="mr-2">
                        <PiNumberCircleOne
                          className={`${
                            state.makerzFormStep === 1
                              ? "text-green-700 dark:text-green-300"
                              : "dark:zinc-600 text-zinc-400"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="mr-2">
                        {
                          <FaCircleCheck className="text-green-600 dark:text-green-400" />
                        }
                      </div>
                    )}
                    Create Task Type
                  </AccordionTrigger>
                  <AccordionContent>
                    <MakerzTaskCreateStep1
                      state={state}
                      setValue={setValue}
                      dispatch={dispatch}
                      register={register}
                      handleFormChange={handleFormChange}
                      errors={errors}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className={accordionItemClassName}
                >
                  <AccordionTrigger
                    className={`flex justify-start py-0 font-normal transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180`}
                    onClick={() => handleStepChange(2)}
                  >
                    {state.makerzFormStep < 3 ? (
                      <div className="mr-2">
                        <PiNumberCircleTwo
                          className={`${
                            state.makerzFormStep === 2
                              ? "text-green-700 dark:text-green-300"
                              : "dark:zinc-600 text-zinc-400"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="mr-2">
                        {state.hasMissingFields ? (
                          <FaCircleXmark className="text-red-600 dark:text-red-400" />
                        ) : (
                          <FaCircleCheck className="text-green-600 dark:text-green-400" />
                        )}
                      </div>
                    )}
                    Add Task Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <MakerzTaskCreateStep2
                      state={state}
                      setValue={setValue}
                      dispatch={dispatch}
                      register={register}
                      handleFormChange={handleFormChange}
                      errors={errors}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className={accordionItemClassName}
                >
                  <AccordionTrigger
                    className={`flex justify-start py-0 font-normal transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180`}
                    onClick={() => handleStepChange(3)}
                  >
                    {state.makerzFormStep < 4 ? (
                      <div className="mr-2">
                        <PiNumberCircleThree
                          className={`${
                            state.makerzFormStep === 3
                              ? "text-green-700 dark:text-green-300"
                              : "dark:zinc-600 text-zinc-400"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="mr-2">
                        <FaCircleCheck className="text-green-600 dark:text-green-400" />
                      </div>
                    )}
                    Instructions, Images
                  </AccordionTrigger>
                  <AccordionContent>
                    <MakerzTaskCreateStep3
                      state={state}
                      setValue={setValue}
                      dispatch={dispatch}
                      register={register}
                      handleFormChange={handleFormChange}
                      errors={errors}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className={accordionItemClassName}
                >
                  <AccordionTrigger
                    className={`flex justify-start py-0 font-normal transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180`}
                    onClick={() => handleStepChange(4)}
                  >
                    {state.makerzFormStep < 5 ? (
                      <div className="mr-2">
                        <PiNumberCircleFour
                          className={`${
                            state.makerzFormStep === 4
                              ? "text-green-700 dark:text-green-300"
                              : "dark:zinc-600 text-zinc-400"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="mr-2">
                        <FaCircleCheck className="text-green-600 dark:text-green-400" />
                      </div>
                    )}
                    Task Funding/Bounty
                  </AccordionTrigger>
                  <AccordionContent>
                    <MakerzTaskCreateStep4
                      state={state}
                      setValue={setValue}
                      dispatch={dispatch}
                      register={register}
                      handleFormChange={handleFormChange}
                      errors={errors}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className={accordionItemClassName}
                >
                  <AccordionTrigger
                    className={`flex justify-start py-0 font-normal transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180`}
                    onClick={() => handleStepChange(5)}
                  >
                    {state.makerzFormStep < 6 ? (
                      <div className="mr-2">
                        <PiNumberCircleFive
                          className={`${
                            state.makerzFormStep === 5
                              ? "text-green-700 dark:text-green-300"
                              : "dark:zinc-600 text-zinc-400"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="mr-2">
                        <FaCircleCheck className="text-green-600 dark:text-green-400" />
                      </div>
                    )}
                    Schedule Start/End
                  </AccordionTrigger>
                  <AccordionContent>
                    <MakerzTaskCreateStep5
                      state={state}
                      setValue={setValue}
                      dispatch={dispatch}
                      register={register}
                      handleFormChange={handleFormChange}
                      errors={errors}
                    />
                  </AccordionContent>
                </AccordionItem>

                {/* Add more AccordionItem components for other steps as needed */}
              </Accordion>
            </div>
            {/*
            {state.makerzFormStep == 3 && (
              <MakerzTaskCreateStep3
                state={state}
                setValue={setValue}
                dispatch={dispatch}
                register={register}
                handleFormChange={handleFormChange}
                errors={errors}
              />
            )} */}

            {/* {state.makerzFormStep < 4 && (
              <MakerzTaskCreateStep4
                state={state}
                setValue={setValue}
                dispatch={dispatch}
                register={register}
                handleFormChange={handleFormChange}
                errors={errors}
              />
            )} */}

            {/* {state.makerzFormStep === 5 && (
              <MakerzTaskCreateStep5
                state={state}
                setValue={setValue}
                dispatch={dispatch}
                register={register}
                handleFormChange={handleFormChange}
                errors={errors}
              />
            )} */}
          </div>
        </form>
      </div>
      <MakerzTaskCreatePreview data={state} state={state} />
    </div>
  );
};

export default CreateMakerzTaskForm;
