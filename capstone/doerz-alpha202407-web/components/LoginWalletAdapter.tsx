import dynamic from "next/dynamic";
import React, { useState } from "react";
// import { useAutoConnect } from '../contexts/AutoConnectProvider';
// import NetworkSwitcher from './NetworkSwitcher';
require("./styles-loginWallet.css");
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

const LoginWalletAdapter = () => {
  // const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="">
      <WalletMultiButtonDynamic className="" />
    </div>
  );
};

export default LoginWalletAdapter;
