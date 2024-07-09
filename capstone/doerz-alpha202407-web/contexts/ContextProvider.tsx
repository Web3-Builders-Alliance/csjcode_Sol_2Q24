import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { Cluster, clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useCallback, useMemo } from "react";
// import {
//   NetworkConfigurationProvider,
//   useNetworkConfiguration,
// } from "./NetworkConfigurationProvider";
import dynamic from "next/dynamic";
import useNetworkStore from "@/store/store";

const ReactUIWalletModalProviderDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletModalProvider,
  { ssr: false },
);

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const { networkConfiguration } = useNetworkConfiguration();

  // const externalRpcUrl = process.env.NEXT_PUBLIC_MAIN_RPC_URL || "";
  const externalRpcUrl = useNetworkStore((state) => state.externalRpcUrl);
  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  // console.log(`Context Provider currentNetwork ${currentNetwork}`);

  // console.log(`BEFORE switch Context Provider rpc url ${externalRpcUrl}`);

  let rpcUrl: string;
  switch (currentNetwork) {
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

  // console.log(`AFTER switch Context Provider rpc url ${rpcUrl}`);

  // const network = networkConfiguration as WalletAdapterNetwork;

  //   const network = "mainnet-beta"; // Use 'mainnet-beta', 'testnet', or 'devnet'
  const endpoint = useMemo(() => rpcUrl, []);

  //   console.log(network);

  const wallets = useMemo(
    () => [
      // new UnsafeBurnerWalletAdapter(),
    ],
    [],
  );

  const onError = useCallback((error: WalletError) => {
    // notify({ type: 'error', message: error.message ? `${error.name}: ${error.message}` : error.name });
    console.error(error);
  }, []);

  return (
    // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
    <ConnectionProvider endpoint={rpcUrl}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect>
        {/* <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}> */}
        <ReactUIWalletModalProviderDynamic>
          {children}
        </ReactUIWalletModalProviderDynamic>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {/* <NetworkConfigurationProvider> */}
      {/*   <AutoConnectProvider> */}
      <WalletContextProvider>{children}</WalletContextProvider>
      {/* </AutoConnectProvider>*/}
      {/* </NetworkConfigurationProvider> */}
    </>
  );
};
