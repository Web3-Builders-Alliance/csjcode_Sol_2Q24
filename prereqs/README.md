
# WBA PREREQS

wbapreq-S2024Q2

Prerequisites: Enrollment dApp

READ CAREFULLY ALL STEPS

(NOTE-If you are a windows user, you will want to work in WSL2 for Solana)
These prerequisites are meant to assess your ability to follow process, execute tasks, debug
simple errors (intentionally placed), and ship code. They are not a test of your typescript or
coding skills. It is integral that you UNDERSTAND what is happening every step of the way.
This is a foundational process that we jump right into building upon in week one of the cohort.
As always, when in doubt- after trying for a minute- ask in the Solana Chat channel of the
Discord. If this is beyond your capacity at the moment, we will help you find the right program to

better prepare you for a future cohort.

Now we start- you will:
● Learn how to use @solana/web3.js to create a new keypair

● Use our Public Key to airdrop ourselves some Solana devnet tokens
● Make Solana transfers on devnet

● Empty your devnet wallet into your WBA wallet

● Use our WBA Private Key to enroll in the WBA enrollment dApp


✅ 1.1 Setting up

✅ 1.2 Generating a Keypair

✅ 1.3 Import/Export to Phantom

✅2. Claim Token Airdrop
	 https://explorer.solana.com/tx/qrgh9svUddgxsKRkgnDJbDkNsEBKNTxNHYJVoe1ohoCLzRx3eChaWpDmd9NtaBxVyFZ4siiAo3QAtaxh4y3DPAk?cluster=devnet

✅ 3. Transfer tokens to your WBA Address

  https://explorer.solana.com/tx/3YTXgY4fxJXt3DmNxspXaQVdSsxCo9VpKw4Y5jXSCtox2e7Pjatnz7hyx9KrjdtJdSqqPyoU8aHAZPxtMfrrVnvf?cluster=devnet

✅ 4. Empty devnet wallet into WBA wallet

  https://explorer.solana.com/tx/4PEKMLpvrgJTQ3bg3PWko3KP8HHQ5kH7H1zG98eJmrbBL8GsEuHZZWHjzgJ41eoVMNLYt1zMNQ5TqFftRE3VnCYi?cluster=devnet

✅ 5. Submit your completion of the WBA pre-requisites program

  * make sure to use gitignore on wallets


✅ 5.1 Consuming an IDL in Typescript

  * Copy paste idl.json into the wba_prereq.ts file
✅ 5.2 Creating a PDA

✅ 5.3 Putting it all together

How to export a private key from Phantom to a Keypair file:
https://edulanasca.hashnode.dev/how-to-export-a-private-key-from-phantom-to-a-keypair-file

"Did you create a wallet directly from Phantom and now you want to use it in the Solana CLI? This simple tutorial explains how to do that."

```ts
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

```

✅ Success! Check out your TX here:

  https://explorer.solana.com/tx/4G1ukveyyExTEpuftFb7hNqcVea6WNWTcr4qoSdpqkBpnumFkDP1dK2YdJbT1PMN5GQhtdjfS6g3dnSg1Th8KLjV?cluster=devnet
