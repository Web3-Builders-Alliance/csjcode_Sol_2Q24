import * as anchor from '@project-serum/anchor';
import { PublicKey, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, TOKEN_2022_PROGRAM_ID } from '@solana/spl-token';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up the provider
const provider = anchor.AnchorProvider.local('https://api.devnet.solana.com');
anchor.setProvider(provider);

// Program and Wallet Details
const programId = new PublicKey('GNqSWVRWTdeAes2QBJsZ63ncvXwYekEkhma4yLcPHkxp');
const wallet = provider.wallet as anchor.Wallet;

// Create a new keypair for the swap account
const swapAccount = Keypair.generate();
const swapAccountPublicKey = swapAccount.publicKey;

// Constants
const INITIAL_BALANCE = 50000; // Initial balance of Doerz tokens
const doerzTokenMint = new PublicKey('Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY');
const programTokenAccount = new PublicKey('Eh8RvvYpzTUU1vok29NpErUtQhbRccxiEA6XXx2Cu4ZZ');

// Manually load the IDL file from the local directory
const idlPath = path.resolve(__dirname, '../../target/idl/solana_swap.json');
const idl = JSON.parse(fs.readFileSync(idlPath, 'utf8'));

async function initializeSwapAccount() {
  try {
    console.log('Initializing the Anchor program with the local IDL...');
    const program = new anchor.Program(idl, programId, provider);

    // Fund the wallet
    console.log('Requesting airdrop...');
    const airdropSignature = await provider.connection.requestAirdrop(
      wallet.publicKey,
      LAMPORTS_PER_SOL
    );
    await provider.connection.confirmTransaction(airdropSignature);
    console.log('Airdrop confirmed');

    // Create associated token account for the swap account
    console.log('Creating associated token account...');
    const swapTokenAccount = await getOrCreateAssociatedTokenAccount(
      provider.connection,
      wallet.payer,
      doerzTokenMint,
      swapAccountPublicKey,
      true, // Allow owner to close account
      "finalized", // Commitment
      undefined, // Confirm options
      TOKEN_2022_PROGRAM_ID // Token program ID
    );

    // Initialize the swap account
    console.log('Initializing swap account...');
    const tx = await program.rpc.initialize(
      new anchor.BN(INITIAL_BALANCE),
      {
        accounts: {
          swapAccount: swapAccountPublicKey,
          user: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
          programTokenAccount: programTokenAccount,
          tokenProgram: TOKEN_2022_PROGRAM_ID,
        },
        signers: [swapAccount],
      }
    );

    console.log('Swap account initialized with transaction signature:', tx);
    console.log('Swap account public key:', swapAccountPublicKey.toString());
  } catch (err) {
    console.error('Error initializing swap account:', err);
  }
}

initializeSwapAccount().catch(err => {
  console.error('Error initializing swap account:', err);
});
