import { ChangeEvent } from "react";
import { State } from "./reducerMakerzTaskFor";

export const handleFormChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setValue: any, dispatch: any
) => {
  
  const { name, value } = e.target;
  const parsedValue = name === "draft" ? value === "true" : value;
  setValue(name, parsedValue);
  dispatch({
    type: "SET_FIELD",
    field: name as keyof State,
    value: parsedValue,
  });
};