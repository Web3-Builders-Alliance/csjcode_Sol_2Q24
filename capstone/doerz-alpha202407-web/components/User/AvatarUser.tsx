import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AvatarUser = () => {
  return (
    <Avatar>
      <AvatarImage asChild src="https://github.com/shadcn.png">
        <Image
          width={40}
          height={40}
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
      </AvatarImage>
      <AvatarFallback>CS</AvatarFallback>
    </Avatar>
  );
};

export default AvatarUser;
