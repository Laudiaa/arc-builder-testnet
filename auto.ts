import { createWalletClient, http, parseAbi } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const account = privateKeyToAccount(
  "0x7d1f395c4e9ddba6aa5e9df6778d9434baa66dde7141680e18377d7d24c4d3d5"
);

const client = createWalletClient({
  account,
  transport: http("https://rpc.testnet.arc.network"),
});

const nftAddress =
  "0xEa7ba065BC274ff0aD41663314FFDA162dba654D";

const abi = parseAbi([
  "function mint() public",
]);

async function main() {

  console.log("Minting NFT...");

  const hash = await client.writeContract({
    address: nftAddress,
    abi,
    functionName: "mint",
  });

  console.log("TX:", hash);
}

main();
