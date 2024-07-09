import React from "react";
import { FaSquare } from "react-icons/fa";

type FormLabelProps = {
  labelTitle: string;
  required: boolean;
  ready: boolean;
};

const FormLabel = ({ labelTitle, required, ready }: FormLabelProps) => {
  // const requiredReady = required === true && ready;

  return (
    <label className="flex flex-row items-center justify-center text-sm text-zinc-600 dark:text-zinc-400">
      {labelTitle}
      {required && (
        <FaSquare
          className={`ml-1 ${ready ? "text-green-500/90" : "text-red-500/90"}`}
          size={9}
        />
      )}
    </label>
  );
};

export default FormLabel;
