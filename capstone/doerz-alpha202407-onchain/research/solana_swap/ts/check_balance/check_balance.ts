import { Connection, PublicKey } from '@solana/web3.js';
import { getAccount, getMint, TOKEN_2022_PROGRAM_ID } from '@solana/spl-token';

// Set up the connection
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Token mint address (DRZ token)
const drzMintAddress = new PublicKey('Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY');

// Token account to check balance
const tokenAccountAddress = new PublicKey('Eh8RvvYpzTUU1vok29NpErUtQhbRccxiEA6XXx2Cu4ZZ');

async function checkTokenBalance() {
  try {
    // Fetch the token account info
    const tokenAccountInfo = await getAccount(connection, tokenAccountAddress, "finalized", TOKEN_2022_PROGRAM_ID);

    // Fetch the mint info to get the decimals
    const mintInfo = await getMint(connection, drzMintAddress, "finalized", TOKEN_2022_PROGRAM_ID);

    // Calculate the balance in tokens
    const balance = Number(tokenAccountInfo.amount) / Math.pow(10, mintInfo.decimals);

    console.log(`Balance of DRZ tokens in account ${tokenAccountAddress.toString()}: ${balance}`);

    // Check if the balance matches the expected amount (e.g., 10,000)
    if (balance === 10000) {
      console.log('The balance matches the expected amount of 10,000 DRZ tokens.');
    } else {
      console.log(`The balance does not match the expected amount. Current balance: ${balance} DRZ tokens.`);
    }
  } catch (err) {
    console.error('Error checking token balance:', err);
  }
}

checkTokenBalance();
