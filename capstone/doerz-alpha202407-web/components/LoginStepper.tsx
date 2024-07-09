"use client";
import WalletAdapter from "@/components/WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import LoginWalletAdapter from "./LoginWalletAdapter";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";


type LoginStepperProps = {};

const LoginStepper = (props: LoginStepperProps) => {
  const { connected } = useWallet();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const step = searchParams.get("step");


  // console.log('params', params);
  // const params = useParams<{ step: string }>()

  // const { loggedIn}  = isLoggedIn

  useEffect(() => {
    !connected && router.push("/login?step=1");
    connected && !loggedIn && !settings && router.push("/login?step=2");
    connected && loggedIn && !settings && router.push("/login?step=3");
    connected && loggedIn && settings && router.push("/doerz/inbox");

  }, [connected, loggedIn, settings]);

  const handleSimulateLoggedIn = () => {
    setLoggedIn(true);
  };

  const handleSimulateSettings = () => {
    setSettings(true);

  };

  const connectStyle = connected
    ? "bg-green-200 dark:bg-green-800"
    : "bg-zinc-700 dark:bg-zinc-200 text-white";

  const loggedInStyle =
    connected && loggedIn
      ? "bg-green-200 dark:bg-green-800"
      : connected && !loggedIn && step === "2"
        ? "bg-zinc-700 text-white" : "bg-zinc-200 bg-zinc-200 dark:bg-green-800";

  const preferencesStyle =
    connected && loggedIn && settings
      ? "bg-green-200 dark:bg-green-800"
      : "bg-zinc-200 bg-zinc-200 dark:bg-green-800";

  return (
    <div className="mt-4 flex flex-col">
      <div className="mt-4 flex flex-row">
        <div className={`${connectStyle} } mr-1 px-4 py-2`}>
          1. {connected ? "Wallet Connected" : "Connect Wallet"}
        </div>
        <div
          className={`${loggedInStyle} mr-1 px-4 py-2 dark:text-black`}
        >
          2. Login/Register
        </div>
        <div
          className={`${preferencesStyle} mr-1 px-4 py-2 dark:text-black`}
        >
          (Optional) 3. Preferences
        </div>
      </div>

      {step === "1" && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="">Step 1</div>
            {!connected && `NotConnected`}
            {!connected && <WalletAdapter />}
            <div className="mt-4">
              <ul>
                <li className="list-disc">
                  Connect the wallet associated with your Doerz user account.
                </li>
                <li className="list-disc">
                  <span className="">New users:</span> if you have not
                  registered, we will use this for your account.
                </li>
                <li className="list-disc">
                  <span className="">Change wallet:</span> Entering an
                  unregistered wallet will create a new account.
                </li>
                <li>.</li>
              </ul>
            </div>
          </div>{" "}
        </div>
      )}

      {step === "2" && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="">Step 2</div>
            <div className="">
              {" "}
              <div className="">Email:</div>
              <div className="">
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <Button className="mt-4" onClick={handleSimulateLoggedIn}>
              Login Simulator
            </Button>
          </div>{" "}
        </div>
      )}
      {step === "3" && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="">Step 3</div>
            <div className="">Setup Preferences</div>
            <Button className="mt-4" onClick={handleSimulateSettings}>
              Settings Simulator
            </Button>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default LoginStepper;
