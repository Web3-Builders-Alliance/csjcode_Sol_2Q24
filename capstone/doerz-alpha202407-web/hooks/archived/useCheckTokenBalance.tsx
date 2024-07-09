import { useEffect, useState } from 'react';
import { PublicKey, Connection } from '@solana/web3.js';
import { AccountLayout, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';


/*


This does not seem to work so far

*/



const connection = new Connection('https://api.devnet.solana.com'); // Replace with your RPC endpoint if different

const MINT = new PublicKey('GcHduVGrAVK2idNkceundwei2tQ1rosU3ik83HJ2TnRA'); // Replace with your token mint address

const useCheckTokenBalance = () => {
  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const { publicKey } = useWallet();

  useEffect(() => {
    const checkWalletForToken = async () => {
      if (!publicKey) {
        setHasToken(null);
        return;
      }

      try {
        const [tokenAddress] = PublicKey.findProgramAddressSync(
          [publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), MINT.toBuffer()],
          ASSOCIATED_TOKEN_PROGRAM_ID
        );

        const tokenAccountInfo = await connection.getAccountInfo(tokenAddress);

        if (tokenAccountInfo === null) {
          setHasToken(false);
          return;
        }

        const tokenAccountData = AccountLayout.decode(tokenAccountInfo.data);
        const tokenBalance = tokenAccountData.amount.readBigUInt64LE(0); // Adjust this to properly read the balance

        if (tokenBalance > 0) {
          console.log(`Wallet has ${tokenBalance} tokens of ${MINT}`);
          setHasToken(true);
        } else {
          console.log('Wallet does not have the token');
          setHasToken(false);
        }
      } catch (error) {
        console.error('Error fetching token account:', error);
        setHasToken(false);
      }
    };

    checkWalletForToken();
  }, [publicKey]);

  return hasToken;
};

export default useCheckTokenBalance;
