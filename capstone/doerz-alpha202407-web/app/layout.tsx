import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import NavbarContext from "@/components/Nav/NavbarContext";
import NavbarDemos from "@/components/Nav/NavbarDemos";
import { Outfit } from "next/font/google";
import NavFooter from "@/components/Nav/NavFooter";

const outfit = Outfit({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOERZ.fun",
  description: "Rewards for doing things you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`dark ${outfit.variable} ${inter.variable}`} lang="en">
      <body className={`{inter.className} dark:bg-zinc-900`}>
        <NavbarContext>
          <NavBar />
          {/* <NavbarDemos /> */}
          <div className="flex w-full flex-col items-center justify-center">
            {children}
          </div>
          <NavFooter />
        </NavbarContext>
      </body>
    </html>
  );
}
