"use client";
import React, { useEffect, useRef, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, AccountInfo, Connection } from "@solana/web3.js";
import useNetworkStore from "@/store/store";
import useSolanaNetwork from "@/hooks/useSolanaNetwork";

type Props = {};

const WalletGetAccountInfo: React.FC<Props> = () => {
  const [balance, setBalance] = useState<number>(0);
  const [accountInfo, setAccountInfo] = useState<AccountInfo<Buffer> | null>(
    null,
  );
  const connectionRef = useRef<Connection | null>(null);

  // const { connection } = useConnection();

  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  // console.log(`WalletGetAccountInfo currentNetwork: ${currentNetwork}`);

  let { connection } = useSolanaNetwork(currentNetwork);

  const { publicKey } = useWallet();

  useEffect(() => {
    if (!connection || !publicKey) {
      // console.log(`No connection or public key`);
    } else {
      // console.log(`In useEffect network ${currentNetwork} with publicKey: ${publicKey.toBase58()}`);
    }

    if (!connection || !publicKey) return;

    // console.log(`WalletGetAccountInfo useEffect triggered`);

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

    connectionRef.current = new Connection(rpcUrl);

    // Fetch initial account info
    connectionRef.current.getAccountInfo(publicKey).then((info) => {
      if (info) {
        // console.log(info);

        // console.log(
        //   `In useEffect with publicKey getAccountInfo for ${currentNetwork} SOL: ${
        //     info.lamports / LAMPORTS_PER_SOL
        //   } `
        // );
        setBalance(info.lamports / LAMPORTS_PER_SOL);
        setAccountInfo(info);
      } else {
        // console.log(`No account info found`);
        // setBalance(info.lamports / LAMPORTS_PER_SOL);
        setBalance(0);
        setAccountInfo(null);
      }
    });
    // Subscribe to account changes
    const subscriptionId = connection.onAccountChange(
      publicKey,
      (updatedAccountInfo) => {
        setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
        setAccountInfo(updatedAccountInfo);
      },
      "confirmed",
    );

    // Cleanup subscription on component unmount
    return () => {
      connectionRef.current !== null &&
        connectionRef.current.removeAccountChangeListener(subscriptionId);
    };
  }, [connection, publicKey, currentNetwork]);

  // console.log(accountInfo);

  return (
    <div className="">
      <p>Current Network: {currentNetwork}</p>
      <p>{publicKey ? `Balance: ${balance} SOL` : "Connect your wallet"}</p>

      {accountInfo ? (
        <>
          <p>Owner: {accountInfo.owner.toBase58()}</p>
          <p>Space Used: {accountInfo.data.length} bytes</p>
          <p>Executable: {accountInfo.executable ? "Yes" : "No"}</p>
          <p>RentEpoch: {accountInfo.rentEpoch}</p>
        </>
      ) : (
        <p>Looking...No account information found yet...</p>
      )}
    </div>
  );
};

export default WalletGetAccountInfo;
