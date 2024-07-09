import React from "react";
import { prettyPrintJson } from "@/utils/formatJson";
import DisplayExtractedData from "./DisplayExtractedData";
import { extractFirstPairData } from "./extractFirstPairData";

type Props = { data: any };

const DisplayTokenInfoByProgramId = ({ data }: Props) => {
  console.log(`DisplayTokenInfoByProgramId ${JSON.stringify(data)}`);

  const extracted = extractFirstPairData(data);

  return (
    <div>
      <hr className="mt-4 pt-4" />
      <h1 className="text-xl font-bold">Raw Token Info</h1>
      <div className="m-4">
        <h1 className="text-lg font-bold">{}</h1>
      </div>

      {extracted && <DisplayExtractedData data={extracted} />}

      <pre className="overflow-x-auto rounded-md p-4">
        {prettyPrintJson(data)}
      </pre>
    </div>
  );
};

export default DisplayTokenInfoByProgramId;
