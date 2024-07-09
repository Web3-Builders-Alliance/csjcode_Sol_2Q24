import React from "react";
import CardDemo from "./CardDemo";

type CardDemoListProps = {};

function CardDemoList({}: CardDemoListProps) {
  const cardList = Array.from({ length: 12 }, (_, i) => i + 1); // replace this with your actual data
  return (
    <div className="grid grid-cols-3 gap-3 xl:grid-cols-4">
      {cardList.map((item, index) => (
        <CardDemo key={index} />
      ))}
    </div>
  );
}

export default CardDemoList;
