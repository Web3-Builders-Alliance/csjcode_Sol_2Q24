"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GetTokenInfoByProgramId from "@/components/tokens-info/fetch/GetTokenInfoByProgramId";
import GetTokenInfoBySymbol from "@/components/tokens-info/fetch/GetTokenInfoBySymbol";

type Props = {};

const GetTokenInfo = (props: Props) => {
  const [programId, setProgramId] = useState("");
  const [symbol, setSymbol] = useState("");
  const [fetchProgramId, setFetchProgramId] = useState<string | null>(null);
  const [fetchSymbol, setFetchSymbol] = useState<string | null>(null);

  const handleGetByProgramId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgramId(e.target.value);
  };

  const handleGetBySymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value);
  };

  const handleSubmitByProgramId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFetchProgramId(programId);
    setFetchSymbol(null); // Reset symbol fetch to avoid concurrent fetches
  };

  const handleSubmitBySymbol = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFetchSymbol(symbol);
    setFetchProgramId(null); // Reset programId fetch to avoid concurrent fetches
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <form onSubmit={handleSubmitByProgramId}>
        <div className="flex flex-row items-center justify-start">
          <label className="mr-2">Program Id</label>
          <div>
            <Input className="m-2 w-64" value={programId} onChange={handleGetByProgramId} />
          </div>
          <Button className="m-1" type="submit">
            Get Data
          </Button>
        </div>
      </form>

      <form onSubmit={handleSubmitBySymbol}>
        <div className="flex flex-row items-center justify-center">
          <label className="mr-2">Symbol</label>
          <div>
            <Input className="m-2 w-32" value={symbol} onChange={handleGetBySymbol} />
          </div>
          <Button className="m-1" type="submit">
            Get Data
          </Button>
        </div>
      </form>

      <div>
        {fetchProgramId && <GetTokenInfoByProgramId programId={fetchProgramId} />}
        {fetchSymbol && <GetTokenInfoBySymbol symbol={fetchSymbol} />}
      </div>
    </div>
  );
};

export default GetTokenInfo;
