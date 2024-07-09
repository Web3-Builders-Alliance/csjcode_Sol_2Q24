"use client";
import useSolanaNetwork from "@/hooks/useSolanaNetwork";
import useNetworkStore from "@/store/store";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React, { FC, useCallback } from "react";

type Props = {};

const WalletSendTransaction = (props: Props) => {
  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  // console.log(`WalletGetAccountInfo currentNetwork: ${currentNetwork}`);

  let { connection } = useSolanaNetwork(currentNetwork);
  const { publicKey, sendTransaction } = useWallet();
  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey("8JhUQRQSBg8g4wmgMoh3qvMzGSV2HLU38SDpWC6MswF1"),
        lamports: 1_000_000,
      }),
    );

    if (!connection) return; // Add null check for connection

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection]);
  return (
    <button onClick={onClick} disabled={!publicKey}>
      Send 1 lamport to a random address!
    </button>
  );
};

export default WalletSendTransaction;
