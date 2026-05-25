const { ethers } = require("ethers");

const RPC = "https://rpc.testnet.arc.network";

const provider = new ethers.JsonRpcProvider(RPC);

async function main() {
  const block = await provider.getBlockNumber();

  console.log("ARC latest block:", block);

  const gasPrice = await provider.getFeeData();

  console.log("Gas info:", gasPrice);
}

main();
