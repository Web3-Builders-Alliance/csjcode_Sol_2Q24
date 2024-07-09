const { PublicKey } = require('@solana/web3.js');


const OWNER = new PublicKey('7bt69s9GpP1aPTS9WLMqetuu8sdDYrmFVLgw4BAnNjTB');
const MINT = new PublicKey('GcHduVGrAVK2idNkceundwei2tQ1rosU3ik83HJ2TnRA');    // e.g., EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
const TOKEN_PROGRAM_ID = new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY');


const [address] = PublicKey.findProgramAddressSync(
  [OWNER.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), MINT.toBuffer()],
  ASSOCIATED_TOKEN_PROGRAM_ID
);

console.log('Using Solana-Web3.js: ', address.toBase58());