import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GrServerCluster } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { GiCoins } from "react-icons/gi";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import Link from "next/link";

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const Portal = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full grow justify-center gap-4 pb-8 pl-4 pt-8">
        <div className="flex flex-col h-[50%] w-2/5 p-8 items-center justify-center rounded-xl border-2 border-zinc-200 dark:border-zinc-600">
          <div className="pb-6 text-center text-2xl">
            <div>
              <u className="decoration-slate-400 decoration-dashed underline-offset-8">
                Do stuff
              </u>{" "}
              and get{" "}
              <u className="decoration-slate-400 decoration-dashed underline-offset-8 dark:decoration-slate-600">
                rewards
              </u>
            </div>
          </div>
          <Link href="/login/">
            <Button className="h-20 w-40 bg-blue-500 text-white text-xl hover:bg-blue-600">
              Doerz
            </Button>
          </Link>
          <div className="mt-6 w-[60%] leading-relaxed text-zinc-500">
            <ul className="list-outside list-disc">
              <li>Rewards for social media promotion</li>
              <li>Rewards for token/NFT ownership</li>
              <li>Answer quizes and surveys</li>
              <li>Rewards for staking, trying new apps</li>
              <li>Rewards for participation</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col h-[50%] w-2/5 p-8 items-center justify-center rounded-xl border-2 border-zinc-200 dark:border-zinc-600">
          <div className="pb-6 text-center text-2xl">
            <div className="">
              Promote{" "}
              <u className="decoration-slate-400 decoration-dashed underline-offset-8 dark:decoration-slate-600">
                something
              </u>
            </div>
          </div>
          <Link href="/makerz/">
            <Button className="h-20 w-40 bg-green-600 text-xl text-white hover:bg-green-700">
              Makerz
            </Button>
          </Link>
          <div className="mt-6 w-[60%] leading-relaxed text-zinc-500">
            <ul className="list-outside list-disc">
              <li>Promote apps, tokens, protocols</li>
              <li>New features, rollouts and events</li>
              <li>Social media campaigns</li>
              <li>Influencers omni-channel</li>
              <li>Test ideas, get user feedback</li>
            </ul>
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

export default Portal;
