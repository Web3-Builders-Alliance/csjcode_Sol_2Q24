import dynamic from "next/dynamic";
import React, { useState } from "react";
// import { useAutoConnect } from '../contexts/AutoConnectProvider';
// import NetworkSwitcher from './NetworkSwitcher';
require("./styles-wallet.css");
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

const WalletAdapter = () => {
  // const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-[10px tex-sm]">
      <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex text-lg md:hidden" />
    </div>
  );
};

export default WalletAdapter;
