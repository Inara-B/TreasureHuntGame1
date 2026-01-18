document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const time = params.get("time");
  const clicks = params.get("clicks");
  const mode = params.get("mode");

  if (time && clicks && mode === "Hard") {
    document.getElementById("finalTime").textContent = time;
    document.getElementById("finalClicks").textContent = clicks;
    document.getElementById("mode").textContent = mode;
  } else {
    console.warn("Missing or invalid query parameters");
    return;
  }

  const bestTimeKey = "bestTimeHard";
  const leastClicksKey = "leastClicksHard";

  const previousBestTime = localStorage.getItem(bestTimeKey);
  const previousLeastClicks = localStorage.getItem(leastClicksKey);

  const newTime = Number(time);
  const newClicks = Number(clicks);

  if (isNaN(newTime) || isNaN(newClicks)) {
    console.warn("Invalid time or clicks");
    return;
  }

  if (!previousBestTime || newTime < Number(previousBestTime)) {
    localStorage.setItem(bestTimeKey, newTime);
    document.getElementById("bestTimeHard").textContent = newTime;
  } else {
    document.getElementById("bestTimeHard").textContent = previousBestTime;
  }

  if (!previousLeastClicks || newClicks < Number(previousLeastClicks)) {
    localStorage.setItem(leastClicksKey, newClicks);
    document.getElementById("leastClicksHard").textContent = newClicks;
  } else {
    document.getElementById("leastClicksHard").textContent =
      previousLeastClicks;
  }
});
