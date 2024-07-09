import { useEffect, useState } from 'react';
import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import useNetworkStore from '@/store/store';
import useSolanaNetwork from './useSolanaNetwork';

interface TokenAccountInfo {
  pubkey: string;
  mint: string;
  owner: string;
  decimals: number;
  amount: number;
}

const useTokenAccountsByMint = (mintAddress: string) => {
  const [tokenAccounts, setTokenAccounts] = useState<TokenAccountInfo[]>([]);
  const { publicKey } = useWallet();
  // const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const currentNetwork = useNetworkStore((state) => state.currentNetwork);
  let { connection } = useSolanaNetwork(currentNetwork);

  useEffect(() => {
    const filterByMint = async (publicKey: PublicKey) => {
      const mint = new PublicKey(mintAddress);

      try {
        if (connection) {
          const response = await connection.getParsedTokenAccountsByOwner(publicKey, { mint });

          const accounts: TokenAccountInfo[] = response.value.map((accountInfo) => ({
            pubkey: accountInfo.pubkey.toBase58(),
            mint: accountInfo.account.data["parsed"]["info"]["mint"],
            owner: accountInfo.account.data["parsed"]["info"]["owner"],
            decimals: accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"],
            amount: accountInfo.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"],
          }));

          setTokenAccounts(accounts);
        }
      } catch (error) {
        console.error('Error fetching token accounts:', error);
      }
    };

    if (publicKey && connection && mintAddress) {
      filterByMint(publicKey);
    }
  }, [publicKey, mintAddress, connection]);

  return tokenAccounts;
};

export default useTokenAccountsByMint;
