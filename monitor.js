const { ethers } = require("ethers");

const provider = new ethers.WebSocketProvider(
  "wss://rpc.testnet.arc.network"
);

console.log("Monitoring ARC events...");

provider.on("block", async (blockNumber) => {
  console.log("New block:", blockNumber);
});
