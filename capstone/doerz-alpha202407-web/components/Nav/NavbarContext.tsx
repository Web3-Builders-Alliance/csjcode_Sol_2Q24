"use client";
import { ContextProvider } from "@/contexts/ContextProvider";
import React from "react";

type NavbarContextProps = {
  children: React.ReactNode;
};

function NavbarContext({ children }: NavbarContextProps) {
  return <ContextProvider>{children}</ContextProvider>;
}

export default NavbarContext;
