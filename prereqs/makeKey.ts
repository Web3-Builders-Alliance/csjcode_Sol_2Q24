import { Keypair } from '@solana/web3.js';
import base58 from "bs58";
import * as fs from 'fs';

const PRIVATE_KEY = ""; // Private key from phantom
const PUBLIC_KEY = ""; // Public address for that key
const secret = base58.decode(PRIVATE_KEY);

// Check if the private key is correct
const pair = Keypair.fromSecretKey(secret);

if (pair.publicKey.toString() == PUBLIC_KEY) {
  fs.writeFileSync(
    'private_key.json',
    JSON.stringify(Array.from(secret))
  );
}