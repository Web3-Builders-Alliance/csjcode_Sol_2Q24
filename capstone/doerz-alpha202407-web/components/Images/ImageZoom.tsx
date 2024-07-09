import React, { useState } from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ImageZoomProps {
  src: string;
  alt: string;
  zSrc: string;
  zWidth: number;
  zHeight: number;
}

const ImageZoom = ({ src, alt, zSrc, zWidth, zHeight }: ImageZoomProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverCard openDelay={.3} closeDelay={.1}>
          <HoverCardTrigger>
            {" "}
            <Image
              className="py-2 pr-2"
              src={src}
              alt={alt}
              width="150"
              height="100"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-[580px] h-[380px]">
            <Image
              alt=""
              className="py-2 pr-2"
              src={zSrc}
              width={zWidth}
              height={zHeight}
            />
          </HoverCardContent>
        </HoverCard>

        {/* <Image alt="" className="pr-2 py-2" src={zSrc} width={zWidth} height={zHeight}/> */}
        {/* {isHovered && (


      )} */}
      </div>
      {/* {isHovered && <div className="border border-zinc-700">isHovered</div>} */}
    </div>
  );
};

export default ImageZoom;
