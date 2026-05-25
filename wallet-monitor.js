const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://rpc.testnet.arc.network"
);

const wallet = "0xE6eC92E61a0E8961662a8534D12865534a14cd21";

async function checkBalance() {
  const balance = await provider.getBalance(wallet);

  console.log(
    "Balance:",
    ethers.formatEther(balance),
    "ARC"
  );
}

checkBalance();
