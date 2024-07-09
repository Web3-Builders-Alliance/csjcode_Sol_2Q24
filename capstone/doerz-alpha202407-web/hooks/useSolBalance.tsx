import { useEffect, useState } from 'react';
import { PublicKey, Connection } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import useNetworkStore from '@/store/store';
import useSolanaNetwork from './useSolanaNetwork';

const useSolBalance = () => {
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const { publicKey } = useWallet();
  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  let { connection } = useSolanaNetwork(currentNetwork);

  useEffect(() => {
    const fetchSolBalance = async (publicKey: PublicKey) => {
      try {
        if (connection) {
          const balance = await connection.getBalance(publicKey);
          setSolBalance(balance / 1e9); // Convert lamports to SOL
        }
      } catch (error) {
        console.error('Error fetching SOL balance:', error);
        setSolBalance(null);
      }
    };

    if (publicKey && connection) {
      fetchSolBalance(publicKey);
    }
  }, [publicKey, connection]);

  return solBalance;
};

export default useSolBalance;
