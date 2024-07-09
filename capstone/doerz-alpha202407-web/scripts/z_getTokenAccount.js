import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

(async () => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const tokenAccount = new PublicKey(
    "2vaJFziwawERLov9JMJaKYmrqNsMKsb6K7zyaDwvVEpP"
  );

  let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
  console.log(`amount: ${tokenAmount.value.amount}`);
  console.log(`decimals: ${tokenAmount.value.decimals}`);
})();
