import wallet from "../wba-wallet.json";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { readFile } from "fs/promises";

// Create a devnet connection
const umi = createUmi("https://api.devnet.solana.com");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
  try {
    //1. Load image
    const file = await readFile(
      "/Users/csjcode/WEBDEV/SOLANA/WBA/solana-starter-20240516/ts/cluster1/rug.png"
    );
    //2. Convert image to generic file.
    const image = createGenericFile(file, "rug", { contentType: "image/png" });
    //3. Upload image
    const [uri] = await umi.uploader.upload([image]);

    console.log("Your image URI: ", uri);
  } catch (error) {
    console.log("Oops.. Something went wrong", error);
  }
})();
