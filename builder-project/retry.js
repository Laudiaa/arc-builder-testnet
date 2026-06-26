const { logEvent } = require("./tracker");

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithRetry(taskFn, maxRetry = 3) {
  let attempt = 1;

  while (attempt <= maxRetry) {
    try {
      logEvent("TRY", `Attempt ${attempt}`);

      const result = await taskFn();

      logEvent("SUCCESS", `Success at attempt ${attempt}`);
      return result;

    } catch (err) {
      logEvent("FAIL", `Attempt ${attempt} failed`);

      if (attempt === maxRetry) {
        logEvent("ERROR", "Max retry reached, stop");
        throw err;
      }

      const delay = attempt * 2000;
      logEvent("WAIT", `Retry in ${delay}ms`);

      await sleep(delay);
    }

    attempt++;
  }
}

module.exports = { runWithRetry };
