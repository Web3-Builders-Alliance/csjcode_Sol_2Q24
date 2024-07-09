import SignInWallet from "@/components/SignInWallet";
import WalletGetAccountInfo from "@/components/WalletGetAccountInfo";
import { Metadata } from "next";
import React from "react";

type WalletsPageProps = {};
// export const metadata: Metadata = {
//   title: "Wallets - DOERZ.fun",
//   description: "Connect your wallet",
// };
const WalletsPage = (props: WalletsPageProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex w-full items-center justify-center p-4 text-4xl">
        <h1>Wallet Info</h1>
      </div>
      <div className="w-full">
        <SignInWallet />
      </div>
      <div className="w-full">
        <WalletGetAccountInfo />
      </div>
    </div>
  );
};

export default WalletsPage;
