"use client";
import dynamic from 'next/dynamic';
import { Bungee, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { GoGear } from 'react-icons/go';
import { useUserProfileStore, useUserTasksStore } from "@/store/store";


// import DropdownNetwork from "./DropdownNetwork";
// import NetworkSwitcher from "./NetworkSwitcher";
import SelectNetwork from '../SelectNetwork';
import WalletAdapter from '../WalletAdapter';
import NavProfileMenu from './NavAvatarMenu';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const DynamicThemeSwitcher = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  const { publicWalletAddress, updatePublicWalletAddress } = useUserProfileStore();
  const { connected, publicKey } = useWallet();
  useEffect(() => {
    if (publicKey) {
      updatePublicWalletAddress(publicKey.toString());
    }
  }, [publicKey, updatePublicWalletAddress]);



  return (
    <>
      <nav className="navbar border border-zinc-200 px-4 py-1 dark:border-zinc-800 dark:bg-zinc-950 mb-4">
        <div className="flex w-full items-center">
          <section className={`${inter.className} mr-auto text-lg font-bold`}>
            <Link href="/">DOERZ.fun</Link>
          </section>

          <ul className="nav-links flex  items-center gap-8">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contacts">
              <li>Contacts</li>
            </Link>
          </ul>
          <div className="flex flex-row items-end">
            <div className="ml-4 rounded-lg border border-zinc-300 dark:border-zinc-900">
              <WalletAdapter />
            </div>
            <div className="flex h-10 flex-row items-center justify-center">
              {/* <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>
                <NetworkSwitcher />
              </div> */}
              <SelectNetwork />
              {/* <SelectNetwork>
                <NetworkSwitcher />
              </SelectNetwork> */}
            </div>
            <div className="mr-2 flex h-10 flex-row items-center justify-center">
              <DynamicThemeSwitcher />
            </div>
            <div className="mr-2 flex h-10 flex-row items-center justify-center">
              {" "}
              <NavProfileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
