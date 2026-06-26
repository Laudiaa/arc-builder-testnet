const fs = require("fs");

const LOG_FILE = "./logs.json";

function loadLogs() {
  if (!fs.existsSync(LOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
}

function line() {
  console.log("-----------------------------");
}

function showDashboard() {
  const logs = loadLogs();

  const runs = logs.filter(l => l.type === "TRY").length;
  const success = logs.filter(l => l.type === "SUCCESS").length;
  const fail = logs.filter(l => l.type === "FAIL").length + logs.filter(l => l.type === "ERROR").length;

  const successRate = runs === 0 ? 0 : ((success / runs) * 100).toFixed(2);

  console.log("\n");
  line();
  console.log("       PROJECT DASHBOARD");
  line();
  console.log("Runs        :", runs);
  console.log("Success     :", success);
  console.log("Failed      :", fail);
  console.log("Success %   :", successRate + "%");
  line();
  console.log("\n");
}

showDashboard();
