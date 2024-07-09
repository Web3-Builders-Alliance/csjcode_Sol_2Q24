import { Button } from "@/components/ui/button";
import { GoGear } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import dynamic from "next/dynamic";
import useSolanaNetwork from "@/hooks/useSolanaNetwork";
import useNetworkStore from "@/store/store";

export function SelectNetwork() {
  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  const updateNetwork = useNetworkStore((state) => state.updateNetwork);
  // console.log(`currentNetwork in SelectNetwork: ${currentNetwork}`);

  const { connection, setNetwork } = useSolanaNetwork(currentNetwork);

  const handleNetwork = (network: string) => {
    let networkChoice;
    switch (network) {
      case "mainnet-beta":
        networkChoice = "mainnet-beta";
        break;
      case "testnet":
        networkChoice = "testnet";
        break;
      case "devnet":
        networkChoice = "devnet";
        break;
      default:
        networkChoice = "devnet";
    }

    console.log(`connection in SelectNetwork: ${networkChoice}`);

    setNetwork(networkChoice);
    updateNetwork(networkChoice);
  };

  return (
    <>
      <Select
        onValueChange={(network) => {
          handleNetwork(network);
        }}
        defaultValue={currentNetwork}
      >
        <SelectTrigger className="border-0 bg-zinc-200 bg-none p-1 outline-zinc-200 ring-offset-0 focus:ring-0 dark:bg-zinc-950 dark:outline-zinc-950">
          <SelectValue placeholder={<GoGear size={22} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="border-0">
            <SelectLabel>
              <span className="text-zinc-400 dark:text-zinc-700">Network</span>
            </SelectLabel>
            <SelectItem value="mainnet-beta">Main</SelectItem>
            <SelectItem value="devnet">Dev</SelectItem>
            <SelectItem value="testnet">Test</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default dynamic(() => Promise.resolve(SelectNetwork), {
  ssr: false,
});
