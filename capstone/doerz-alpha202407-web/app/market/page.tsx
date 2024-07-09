import React from "react";
import TokenPrice from "@/components/TokenPrice";
import { Metadata } from "next";

type MarketPageProps = {};
export const metadata: Metadata = {
  title: "Market - Solana app",
  description: "Market Demo for my Solana app",
};
const MarketPage = (props: MarketPageProps) => {
  return (
    <div>
      <div className="text-xl">Market Dashboard</div>
      <div className="text-lg">Coming soon...</div>
      <TokenPrice />
    </div>
  );
};

export default MarketPage;
