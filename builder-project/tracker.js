const fs = require("fs");

const LOG_FILE = "./logs.json";

function loadLogs() {
  if (!fs.existsSync(LOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
}

function saveLogs(logs) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
}

function logEvent(type, message) {
  const logs = loadLogs();

  const newLog = {
    time: new Date().toISOString(),
    type: type,
    message: message,
  };

  logs.push(newLog);
  saveLogs(logs);

  console.log(`[${newLog.time}] ${type}: ${message}`);
}

module.exports = { logEvent };
