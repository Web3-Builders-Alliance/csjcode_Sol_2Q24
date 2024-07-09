import React from "react";
import TestingReminder from "../messages/TestingReminder";

type FooterProps = {};

const NavFooter = (props: FooterProps) => {
  return (
    <div>
      <hr className="my-4 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
      <div className="px-12 py-4">
        <TestingReminder />
      </div>
      <hr className="my-4 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className=""><div className="text-center text-sm font-medium">DOERZ.fun FEATURES</div></div>
        <div className=""><div className="text-center text-sm font-medium">DOERZ.fun HELP</div></div>
        <div className=""><div className="text-center text-sm font-medium">DOERZ.fun ABOUT</div></div>
      </div>

    </div>
  );
};

export default NavFooter;
