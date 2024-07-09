
Resources:
https://solana.com/developers/guides/getstarted/how-to-create-a-token
https://solana.com/docs/core/tokens#create-a-new-token
https://docs.solanalabs.com/cli/examples/transfer-tokens
https://medium.com/@webpov/how-to-make-a-token-in-the-solana-blockchain-using-a-cli-d76588b53ce8


### Create a wallet
solana-keygen new --outfile drz_wallet.json
solana-keygen new --no-passphrase --no-outfile

### or use grind - IMPORTANT does not produce a seed phrase
solana-keygen grind --starts-with drz:1

### Set a wallet file and confirm
solana config set --keypair drz_wallet.json
solana config get

### Show the address of the wallet
solana address

### Set new rpc url - NOTE: 429 rate limit errors are common, try again
solana config set --url <RPC_ENDPOINT_URL>

### Fund your wallet
solana airdrop 2
(or find another wallet with SOL in it)
solana airdrop 1 <RECIPIENT_ACCOUNT_ADDRESS> --url https://api.devnet.solana.com
solana confirm -v <TRANSACTION_SIGNATURE>
https://faucet.solana.com/

### Fund your wallet
solana account GcHduVGrAVK2idNkceundwei2tQ1rosU3ik83HJ2TnRA

### Confirm network is set correctly
solana config get

### Confirm network is up
https://devnet.helius-rpc.com/?api-key=[...]

### Transfer SOL to the new wallet
solana transfer --from <KEYPAIR path to a keypair> <RECIPIENT_ACCOUNT_ADDRESS> 0.5 --allow-unfunded-recipient --fee-payer <KEYPAIR path to a keypair>


### Step 1: Initialize Solana CLI


```bash
solana config set --url https://api.devnet.solana.com
```

### Step 2: Create a New SPL Token


```bash
spl-token create-token
```

Output:
```bash
$ solana config set --url https://api.devnet.solana.com
Config File: ~/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: <redacted>
Commitment: confirmed

$ spl-token create-token
Creating token CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address:  CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi
Decimals:  9

Signature: 61PzwtxrWhSD14km7mFADvB1QwXW9K9BB3pyZTYZutbFyf5CUVS5QwfqfS4RbmBwx7S9nr9D1QvXjiSCZAm3FAHU
```

Output a new mint address for the DOERZ token. Save this mint address for future reference.

### Step 3: Save the DOERZ Token Mint Address


```bash
DoerzMintAddress="YourMintAddressHere"
```

```bash
DoerzMintAddress="CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi"
```

### Step 4: Create a Token Account for Mint Authority

Create a token account to hold the initial supply of DOERZ tokens using the mint address.

```bash
spl-token create-account $DoerzMintAddress
```

input:
```bash
$ spl-token create-account CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi
```

Output the address of the new token account. Save this account address for future reference.`DoerzTokenAccountAddress`.

```bash
DoerzTokenAccountAddress="YourTokenAccountAddressHere"
```

output:
```bash
$ spl-token create-account CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi
Creating account 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh

Signature: i6c8vF2zqfZiV53XFvAvZKcaQYZGJTgS415yHaxVoHZ2XfyaM8LHjNrKzepc7Yb2fdKdzemQoxiPCoxPhhhDG3P
```

```bash
DoerzTokenAccountAddress="8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh"
```


### Step 5: Mint Initial Supply of DOERZ Tokens

Mint an initial supply of DOERZ tokens to the token account created for the mint authority.

```bash
spl-token mint $DoerzMintAddress 1000000000 $DoerzTokenAccountAddress
```

test input:
```bash
spl-token mint CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi 1000000000 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh
```

test output
```bash
$ spl-token mint CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi 1000000000 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh
Minting 1000000000 tokens
  Token: CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi
  Recipient: 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh

Signature: FayRSPJSoHPWNz7YMxWfjYyFsC8Tthoq4DLYe4aGuYhXv3eYezU1zvJEiraRacesQiMHdJNabbDrUQsEnMzY5NF
```

Check balance (not down much):
```bash
 solana balance
9.992478 SOL
```


 `1000000000` represents the number of DOERZ tokens to mint.


### Transfer

```bash
solana transfer --from 'drz_wallet.json'  <RECIPIENT_ACCOUNT_ADDRESS> 0.5 --allow-unfunded-recipient --url https://api.devnet.solana.com --fee-payer 'drz_wallet.json'
```

Sending the token

spl-token transfer <TOKEN_ADDRESS> <AMOUNT> <RECIPIENT_ACCOUNT_ADDRESS>

Input test:
```bash
spl-token transfer CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi 1000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
```



Output test:
```bash
Transfer 1000 tokens
  Sender: 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh
  Recipient: Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB
  Recipient associated token account: 7RJJ9mwvSZHXJ3ezbYCL4TP8B79kdDvaCyaNwGp2AeQ7
  Funding recipient: 7RJJ9mwvSZHXJ3ezbYCL4TP8B79kdDvaCyaNwGp2AeQ7
  ```

  Another example:
  ```bash
  $ spl-token transfer CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi 100000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
Transfer 100000 tokens
  Sender: 8zbRRyXrDo3P3xQJtga5Rajc4LEHkHLtKWVm4mTsJwjh
  Recipient: Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB
  Recipient associated token account: 7RJJ9mwvSZHXJ3ezbYCL4TP8B79kdDvaCyaNwGp2AeQ7

Signature: 2ibkw88ynEG2H6y9iAc5GdSkJPT7gzHJQKgzkLL1XwWxMSd3bMZyiHJ3sVFgkaZjKbv52Fn6w5iC8zoBKY6gMdVv
  ```

### Check supply

spl-token supply CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi

```bash
$ spl-token supply CBdkHkKH8qGTZhyM8rjpokugL6QruCrmPrCNnBAaQGoi
```

Output:
```bash
1000000000
```
---------------------------------

# Token22 Metadata examples

Input:
```bash
$ spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
```

Output:
```bash
Creating token 7WgA95gprEH7M5NJ4SDC14e2fujY5mUw8W1LEvbqghvC under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

Address:  7WgA95gprEH7M5NJ4SDC14e2fujY5mUw8W1LEvbqghvC
Decimals:  9

Signature: 4XUsiaq3uYHsthvZJzxwMJmxh5W383CGMdJWum8wK6ViTWS29nVVxnjFAzQQifvGcgCu24rqURAWKnU3ivHhHC4D

```


### Metadata

```
spl-token initialize-metadata <TOKEN_MINT_ADDRESS> <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>
```

Input
```bash
$ spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-metadata
```


Output
```bash

Creating token Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
To initialize metadata inside the mint, please run `spl-token initialize-metadata Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>`, and sign with the mint authority.

Address:  Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY
Decimals:  9

Signature: 3emYRDWwUmyZHfq2E6ZZNpmfzXfqkSEcL93hHD6qbrS9gQyx2kTtKACYFA5coFZz5SykD7pgrnWtJbm4bxLwyCHN
```

```bash
spl-token initialize-metadata Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY "DRZ/2 DevTest" "DRZ" "https://raw.githubusercontent.com/csjcode/testing-data/main/metadata.json"

```
```bash
$ spl-token initialize-metadata Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY "DRZ/2 DevTest" "DRZ" "https://raw.githubusercontent.com/csjcode/testing-data/main/metadata.json"

Signature: SBDTEsoWPLSNeKtnihaAWnwSgzCHTcA7zAh915Qm8tZPLb6d32vvSNfNMFni4u4b6h8Hn4isPz9Ttp8jNMyayjz
```


### Create account

```bash
$ spl-token create-account Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY
Creating account 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM

Signature: 5JPKG9M4U6dKWNcJbvQV9hXbYrT7HSvXdK2FFBCoQhP6cevk9mJtWKfVpNJwFR7ZaUr1eDu5nY46RqKyctRCRSNC
```
### Mint account

```bash
spl-token mint Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 1000000000 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM
```

```bash
$ spl-token mint Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 1000000000 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM
Minting 1000000000 tokens
  Token: Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY
  Recipient: 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM

Signature: 4iGbu2CrRCCNjwUTp8H2cJ27dMwz7pZLRTcqLrc6v2Fn8EeTjydENnpPhr53QtYie3hfvLc9eb6kGJVdy7qbYeZR
```

### Transfer

Input:
```bash
spl-token transfer Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 1000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
```

Output:
```bash
$ spl-token transfer Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 1000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
Transfer 1000 tokens
  Sender: 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM
  Recipient: Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB
  Recipient associated token account: HmaZSpWgZpzLeuNDb6D99WRV71C2KyKxxFWjLr6kUz7w
  Funding recipient: HmaZSpWgZpzLeuNDb6D99WRV71C2KyKxxFWjLr6kUz7w

Signature: 3hj9mexjyQJtcC3zYFJt2wrhhS2zKbTD7pJ88iAmdWBKfc6k9wrM8qvJ3GB6JNTLgrBjz7vtHHhTvtZbpqmh8hHj

```

Another

Input:
```bash
spl-token transfer Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 120000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
```

Output:
```bash
$ spl-token transfer Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY 120000 Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB --fund-recipient
Transfer 120000 tokens
  Sender: 28aMCrpSAsUk1vGnvW9ZXg2cHuNMzirwCsYx5QKHsaPM
  Recipient: Fa7bcHJcDgr3o6D7jT8HWx6pSs1ocDpUVwdmgbau2tuB
  Recipient associated token account: HmaZSpWgZpzLeuNDb6D99WRV71C2KyKxxFWjLr6kUz7w

Signature: kjcSfdEsNhPgkBZpXXFpYz4d3qULxSYa8LXr8CfN6oxLTEbwuUkEYkJEv9Vs4E8TacEyuYP77ShdekqnSPUDKoA
```



metadata.json

{
    "name": "DRZ/2 DevTest",
    "symbol": "DRZ",
    "description": "This is a DRZ test token for new idea.",
    "image": "https://arweave.net/t4Q1s65_BM_zZKq5q1dIrEOe4H-ayvReW2fOaC0DmXE",
    "attributes": [
      {
        "trait_type": "Item",
        "value": "DRZ/2 Test Token info"
      }
    ]
  }



---------------------------------
Get associated tokenn address

```bash
spl-token address --owner 7bt69`s9GpP1aPTS9WLMqetuu8sdDYrmFVLgw4BAnNjTB --token Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY --verbose -ud

$ spl-token address --owner 7bt69s9GpP1aPTS9WLMqetuu8sdDYrmFVLgw4BAnNjTB --token Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY --verbose -ud
Wallet address: 7bt69s9GpP1aPTS9WLMqetuu8sdDYrmFVLgw4BAnNjTB
Associated token address: 2vaJFziwawERLov9JMJaKYmrqNsMKsb6K7zyaDwvVEpP
```


---------------------------------

### Summary of Commands

```bash
# Set Solana CLI to use Devnet
solana config set --url https://api.devnet.solana.com

# Create a new SPL token (DOERZ token)
spl-token create-token

# Save the mint address (replace with actual mint address)
DoerzMintAddress="YourMintAddressHere"

# Create a token account for mint authority
spl-token create-account $DoerzMintAddress

# Save the token account address (replace with actual token account address)
DoerzTokenAccountAddress="YourTokenAccountAddressHere"

# Mint initial supply of DOERZ tokens
spl-token mint $DoerzMintAddress 1000000000 $DoerzTokenAccountAddress
```

