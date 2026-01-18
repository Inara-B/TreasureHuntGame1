document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const time = params.get("time");
  const clicks = params.get("clicks");
  const mode = params.get("mode");

  if (time && clicks && mode === "Easy") {
    document.getElementById("finalTime2").textContent = time;
    document.getElementById("finalClicks2").textContent = clicks;
    document.getElementById("mode2").textContent = mode;
  } else {
    console.warn("Missing or invalid query parameters");
    return;
  }

  const bestTimeKey = "bestTimeEasy2";
  const leastClicksKey = "leastClicksEasy2";

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
    document.getElementById("bestTimeEasy2").textContent = newTime;
  } else {
    document.getElementById("bestTimeEasy2").textContent = previousBestTime;
  }

  if (!previousLeastClicks || newClicks < Number(previousLeastClicks)) {
    localStorage.setItem(leastClicksKey, newClicks);
    document.getElementById("leastClicksEasy2").textContent = newClicks;
  } else {
    document.getElementById("leastClicksEasy2").textContent =
      previousLeastClicks;
  }
});
