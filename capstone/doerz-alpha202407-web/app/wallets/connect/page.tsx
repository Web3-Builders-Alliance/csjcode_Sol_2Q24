import SignInWallet from "@/components/SignInWallet";
import WalletCheckStatus from "@/components/WalletCheckStatus";
import WalletGetAccountInfo from "@/components/WalletGetAccountInfo";
import WalletStepperStatus from "@/components/WalletStepperStatus";
import { useWallet } from "@solana/wallet-adapter-react";
import { Metadata } from "next";
import React from "react";

type WalletsPageProps = {};
export const metadata: Metadata = {
  title: "Wallets - DOERZ.fun",
  description: "Connect your wallet",
};
const WalletsPage = (props: WalletsPageProps) => {
  return (
    <div className="flex flex-col">
      {/* <div className="mb-4 flex w-full items-center justify-center p-4 text-4xl">
        <h1>Connect Wallet</h1>
      </div> */}
      <div className="w-full">
        <SignInWallet />
      </div>
      <div className="w-full">
        <WalletStepperStatus />
        {/* <WalletGetAccountInfo /> */}
      </div>
    </div>
  );
};

export default WalletsPage;
