import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const Waitlist = () => {
  return (
    <div className="h-full w-full">
      {" "}
      <div className="bg-zinc-250 relative flex h-full w-full flex-col items-center justify-center rounded-md antialiased dark:bg-zinc-950">
        <div className="absolute inset-0 flex h-full w-full flex-col">
          <div className="flex w-full grow justify-center gap-4 pb-8 pl-4 pt-8">
            <div className="flex flex-col h-[50%] w-2/5 items-center justify-center rounded-xl border-2 border-zinc-200">
              <div className="pb-4 text-2xl text-center">I want to do stuff and get rewarded.</div>
              <Button className="h-16 w-32 bg-orange-500 text-xl hover:bg-orange-600">
                Doerz
              </Button>
            </div>

            <div className="flex flex-col h-[50%] w-2/5 items-center justify-center rounded-xl border-2 border-zinc-200">
              <div className="pb-4 text-2xl text-center">I am promoting something.</div>
              <Button className="h-16 w-32 bg-green-600 text-xl hover:bg-green-700">
                Makerz
              </Button>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
