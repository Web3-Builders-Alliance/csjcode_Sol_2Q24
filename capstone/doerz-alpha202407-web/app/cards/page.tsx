import { Metadata } from "next";
import React from "react";
import CardDemoList from "@/components/CardDemoList";

type CardPageProps = {};
export const metadata: Metadata = {
  title: "Cards - Solana app",
  description: "Cards Demo for my Solana app",
};
const CardPage = (props: CardPageProps) => {
  return (
    <div>
      <CardDemoList />
    </div>
  );
};

export default CardPage;
