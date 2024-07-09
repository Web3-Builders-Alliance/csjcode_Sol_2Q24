// ImageUpload.tsx
import React, { useState, useReducer } from "react";
import DragAndDropImageUpload from "./DragAndDropImageUpload";
import { initialState, reducer } from "./reducerMakerzTaskFor";
import { Button } from "@/components/ui/button";

type ImageUploadProps = {
  dispatch: any;
  state: any;
};
const ImageUpload = ({ dispatch, state }: ImageUploadProps) => {
  const handleReset = () => {
    dispatch({ type: "RESET_IMAGES" });
  };

  console.log("Current state in ImageUpload:", state);
  return (
    <div className="mt-2">
      {/* <h1>Drag and Drop Image Upload Demo</h1> */}
      <DragAndDropImageUpload dispatch={dispatch} images={state.images} />
      <div className="flex flex-row">
        <Button variant="destructive" className="my-4" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outline" className="text-white ml-2 my-4 bg-blue-500" onClick={handleReset}>
          Upload All Images
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
