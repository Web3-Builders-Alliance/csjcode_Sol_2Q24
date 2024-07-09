import { useState, useEffect } from "react";
import { Connection } from "@solana/web3.js";
import useNetworkStore from "@/store/store";

// Define a custom hook
const useSolanaNetwork = (initialNetwork: string) => {
  const [network, setNetwork] = useState(initialNetwork);
  const [connection, setConnection] = useState<Connection | null>(null);
  const updateExternalRpcUrl = useNetworkStore(
    (state) => state.updateExternalRpcUrl,
  );

  const currentNetwork = useNetworkStore((state) => state.currentNetwork);

  useEffect(() => {
    const handleNetworkChange = (network: string) => {
      let rpcUrl;
      console.log(`network in useSolanaNetwork: ${network}`);

      switch (network) {
        case "mainnet-beta":
          rpcUrl = process.env.NEXT_PUBLIC_MAIN_RPC_URL || "";
          break;
        case "testnet":
          rpcUrl = process.env.NEXT_PUBLIC_TEST_RPC_URL || "";
          break;
        case "devnet":
          rpcUrl = process.env.NEXT_PUBLIC_DEV_RPC_URL || "";
        default:
          rpcUrl = process.env.NEXT_PUBLIC_DEV_RPC_URL || "";
      }

      updateExternalRpcUrl(rpcUrl);
      const newConnection = new Connection(rpcUrl);
      setConnection(newConnection);
      // console.log(newConnection);
    };

    handleNetworkChange(network);
  }, [currentNetwork]);

  return { connection, setNetwork };
};

export default useSolanaNetwork;
