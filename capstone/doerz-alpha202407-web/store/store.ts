import { create } from "zustand";
import { persist } from 'zustand/middleware';

type StateUserProfileStore = {
  publicWalletAddress: string;
  updatePublicWalletAddress: (address: string) => void;
};

type ActionUserProfileStore = {
  updatePublicWalletAddress: (address: string) => void;
};
type UserProfileStore = StateUserProfileStore & ActionUserTasksStore;

export const useUserProfileStore = create<UserProfileStore>()(
  persist(
    (set) => ({
      publicWalletAddress: "",
      updatePublicWalletAddress: (address: string) => set({ publicWalletAddress: address }),
    }),
    {
      name: 'users-profile', // unique name for storage key
      getStorage: () => localStorage, // specify local storage
    }
  )
);



type StateUserTasksStore = {
  userTaskIdListOpen: string[];
  // walletAddress: string;
};

type ActionUserTasksStore = {
  // updateNetwork: (network: StateNetworkStore["currentNetwork"]) => void;
  // updateExternalRpcUrl: (url: StateNetworkStore["externalRpcUrl"]) => void;
};
type UserTasksStore = StateUserTasksStore & ActionUserTasksStore;

export const useUserTasksStore = create<UserTasksStore>()(
  persist(
    (set) => ({
      userTaskIdListOpen: [""],
      // updateWalletAddress: (address: string) => set({ walletAddress: address }),
    }),
    {
      name: 'users-tasks', // unique name for storage key
      getStorage: () => localStorage, // specify local storage
    }
  )
);


type StateNetworkStore = {
  currentNetwork: string;
  externalRpcUrl: string;
};

type ActionNetworkStore = {
  updateNetwork: (network: StateNetworkStore["currentNetwork"]) => void;
  updateExternalRpcUrl: (url: StateNetworkStore["externalRpcUrl"]) => void;
};

const useNetworkStore = create<StateNetworkStore & ActionNetworkStore>(
  (set) => ({
    currentNetwork: "devnet",
    externalRpcUrl: process.env.NEXT_PUBLIC_DEV_RPC_URL || "",
    updateNetwork: (newNetwork: string) => set({ currentNetwork: newNetwork }),
    updateExternalRpcUrl: (newUrl: string) => set({ externalRpcUrl: newUrl }),
  }),
);

type StateWalletStore = {
  publicWalletCurrent: string;
};

type ActionWalletStore = {
  updatePublicWalletCurrent: (
    network: StateWalletStore["publicWalletCurrent"],
  ) => void;
};

const useWalletStore = create<StateWalletStore & ActionWalletStore>((set) => ({
  publicWalletCurrent: "",
  updatePublicWalletCurrent: (newPublicWalletCurrent: string) =>
    set({ publicWalletCurrent: newPublicWalletCurrent }),
}));

export default useNetworkStore;
