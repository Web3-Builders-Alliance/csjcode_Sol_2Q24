"use client";
// import NavBar from "@/components/NavBar";
import { ContextProvider } from "@/contexts/ContextProvider";
import { Bungee } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Waitlist from "@/components/Waitlist";
import { Metadata } from "next";
import Portal from "@/components/Portal";

// export const metadata: Metadata = {
//   title: "Solana app",
//   description: "Site for my Solana app",
// };

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Portal />
      </div>
    </>
  );
}
