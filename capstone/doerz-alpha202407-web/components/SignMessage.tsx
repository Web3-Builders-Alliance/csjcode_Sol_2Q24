"use client";
// TODO: SignMessage
import { verify } from "@noble/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { FC, useCallback } from "react";
// import { notify } from "../utils/notifications";

// Note: a lot of this is from the solana-dapp-scaffolding andthe `@solana/wallet-adapter-react` package

export const SignMessage: FC = () => {
  const { publicKey, signMessage } = useWallet();

  const onClick = useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new Error("Wallet not connected!");
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage)
        throw new Error("Wallet does not support message signing!");
      // Encode anything as bytes
      const message = new TextEncoder().encode(
        "I read and agree to the terms and conditions!",
      );
      // Sign the bytes using the wallet
      const signature = await signMessage(message);
      // Verify that the bytes were signed using the private key that matches the known public key
      if (!verify(signature, message, publicKey.toBytes()))
        throw new Error("Invalid signature!");
      // notify({ type: 'success', message: 'Sign message successful!', txid: bs58.encode(signature) });
    } catch (error: any) {
      // notify({ type: 'error', message: `Sign Message failed!`, description: error?.message });
      console.log("error", `Sign Message failed! ${error?.message}`);
    }
  }, [publicKey, signMessage]);

  return (
    <div className="flex flex-row justify-center">
      <div className="group relative items-center">
        <div className=""></div>
        <button
          className="mx-2 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-700"
          onClick={onClick}
          disabled={!publicKey}
        >
          <span className="block group-disabled:hidden">Sign Message</span>
        </button>
      </div>
    </div>
  );
};
