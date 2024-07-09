import { SignMessage } from "@/components/SignMessage";
import { Metadata } from "next";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import SignInWallet from "@/components/SignInWallet";
import WalletGetAccountInfo from "@/components/WalletGetAccountInfo";
import WalletSendTransaction from "@/components/WalletSendTransaction";

type TransactionsPageProps = {};
export const metadata: Metadata = {
  title: "Transactions - Solana app",
  description: "Transactions Demo for my Solana app",
};
const TransactionsPage = (props: TransactionsPageProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full items-center justify-center p-4 text-4xl">
        <h1>Transactions</h1>
      </div>
      <div className="w-full">
        <SignInWallet />
      </div>
      <div className="w-full">
        <SignMessage />
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <div className="max-w-[260px] border p-4">
          <WalletGetAccountInfo />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <div className="max-w-[260px] border p-4">
          <WalletSendTransaction />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
