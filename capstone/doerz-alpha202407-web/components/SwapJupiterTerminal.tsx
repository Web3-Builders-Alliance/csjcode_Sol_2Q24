"use client";
import { cn } from "@/utils/cn";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";

type SwapJupiterTerminalProps = {};
// export const metadata: Metadata = {
//   title: "Swap Jupiter Terminal - Solana app",
//   description: "Swap Jupiter Terminal Demo for my Solana app",
// };
const SwapJupiterTerminal = (props: SwapJupiterTerminalProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [loadTimestamp, setLoadTimestamp] = React.useState(0);
  const rpcUrl = process.env.NEXT_PUBLIC_MAIN_RPC_URL;

  if (loadTimestamp === 0) {
    setLoadTimestamp(Date.now());
  }

  return (
    <div className="flex flex-col items-center">
      {/* <Script
        src="https://terminal.jup.ag/main-v2.js"
        onReady={() => {
          window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "integrated-terminal",
            endpoint: rpcUrl,
            // passThroughWallet: walletContextState.wallet,
            // onSuccess: ({ txid }: { txid: string }) => {
            //   capture("user_swap", {
            //     txn: txid,
            //   });
            // },
            // formProps: {
            //   initialInputMint: initialMint ? initialMint.toBase58() : undefined,
            // },
          });
          const currentTime = Date.now();
          const timeElapsed = currentTime - loadTimestamp;
          const delay = Math.max(0, 1000 - timeElapsed);
          setTimeout(() => {
            setIsLoaded(true);
          }, delay);
        }}
      /> */}
      <div className="flex h-full w-4/5 flex-col content-start items-center justify-start gap-8">
        {/* {!isLoaded && <Loader label="Loading Jupiter swap..." className="mt-8" />} */}
        <div
          className={cn(
            "max-w-[420px] px-3 transition-opacity",
            !isLoaded && "opacity-0",
          )}
          id="integrated-terminal"
        ></div>
      </div>
    </div>
  );
};

export default SwapJupiterTerminal;
