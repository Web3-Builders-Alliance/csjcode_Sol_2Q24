"use client";
import React from "react";
import WalletAdapter from "./WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";

type SignInWalletProps = {};

function SignInWallet({}: SignInWalletProps) {
  const { publicKey } = useWallet();

  return (
    <>
      {!publicKey && (
        <div className="flex flex-col items-center justify-center">
          <div className="pb-4">Wallet not connected</div>
          <div className="ml-4 rounded-lg border border-zinc-300 dark:border-zinc-900">
            <WalletAdapter />
          </div>
        </div>
      )}
    </>
  );
}

export default SignInWallet;
