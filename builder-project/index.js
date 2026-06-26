const { logEvent } = require("./tracker");
const { runWithRetry } = require("./retry");

// contoh task (simulasi gagal/sukses)
async function fakeTask() {
  const random = Math.random();

  if (random < 0.6) {
    throw new Error("Random fail");
  }

  return "OK";
}

logEvent("START", "Program dimulai");

runWithRetry(fakeTask, 3)
  .then(() => {
    logEvent("END", "Task selesai");
  })
  .catch(() => {
    logEvent("END", "Task gagal total");
  });
