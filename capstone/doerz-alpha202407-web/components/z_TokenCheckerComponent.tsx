import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import useCheckTokenBalance from '../hooks/useCheckTokenBalance';

const TokenCheckerComponent: React.FC = () => {
  const { connected } = useWallet();
  const hasToken = useCheckTokenBalance();

  return (
    <div>
      <WalletMultiButton />
      {connected && (
        <div>
          {hasToken === null && <p>Checking token balance...</p>}
          {hasToken === true && <p>Your wallet has the token.</p>}
          {hasToken === false && <p>Your wallet does not have the token.</p>}
        </div>
      )}
    </div>
  );
};

export default TokenCheckerComponent;
