"use client";
import React, { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import useTokenAccountsByMint from "@/hooks/useTokenAccountsByMint";
import { formatNumberWithCommas } from "@/utils/formatNumbers";

type FilterTokenByMintProps = {
  tokenMintAddress: string;
};

const FilterTokenByMint = ({tokenMintAddress}: FilterTokenByMintProps) => {
  const { connected } = useWallet();
  const tokenAccounts = useTokenAccountsByMint(
    tokenMintAddress,
  );

  return (
    <div>
      {/* <WalletMultiButton /> */}
      {connected && (
        <div>
          <div className="">
            DRZ held:{" "}
            {tokenAccounts.length === 0
              ? "0"
              : formatNumberWithCommas(tokenAccounts[0]["amount"])}
          </div>
          {tokenAccounts.length === 0 ? (
            <p>No token accounts found.</p>
          ) : (
            tokenAccounts.map((account) => (
              <div key={account.pubkey}>
                {/* <p>Pubkey: {account.pubkey}</p>
                <p>Mint: {account.mint}</p>
                <p>Owner: {account.owner}</p>
                <p>Decimals: {account.decimals}</p> */}
                {/* <p>Amount: {account.amount}</p> */}
                <hr />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FilterTokenByMint;
