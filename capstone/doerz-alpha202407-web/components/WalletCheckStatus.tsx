"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";

type WalletCheckStatusProps = {
};

const WalletCheckStatus = (props: WalletCheckStatusProps) => {
  const { connected } = useWallet();

  // console.log(connected);

  if (connected) {
    return (
      <div className="mt-4 border-4 border-green-600 p-4">
        Status: Connected
      </div>
    );
  } else {
    return (
      <div className="mt-4 border-4 border-red-600 p-4">
        Status: Not Connected
      </div>
    );
  }
};

export default WalletCheckStatus;
