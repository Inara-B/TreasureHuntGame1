const map = document.getElementById("map");
const winRadius = 20;

const getRandomNumber = (size) => Math.floor(Math.random() * size);

const getDistance = (event, target) => {
  const diffX = event.offsetX - target.x;
  const diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

const getDistanceHint = (distance) => {
  if (distance < 10) return "Boiling hot!";
  else if (distance < 20) return "Really hot";
  else if (distance < 40) return "Hot";
  else if (distance < 80) return "Warm";
  else if (distance < 160) return "Cold";
  else if (distance < 320) return "Really cold";
  else return "Freezing!";
};

const width = 400;
const height = 400;
let clicks = 0;
let seconds = 0;
let timerStarted = false;
let timerInterval;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

map.addEventListener("click", function (event) {
  clicks++;

  if (!timerStarted) {
    timerStarted = true;
    timerInterval = setInterval(() => {
      seconds++;
      document.getElementById("time").textContent = seconds;
    }, 1000);
  }

  const distance = getDistance(event, target);
  const hint = getDistanceHint(distance);

  document.getElementById("clicks").textContent = clicks;
  document.getElementById("hint").textContent = hint;

  if (distance < winRadius) {
    clearInterval(timerInterval);
    window.location.href = `/easyend/?time=${seconds}&clicks=${clicks}&mode=Easy`;
  }
});

// Parrot logic for sassy comments - can be left as is
const parrotSpeechElement = document.getElementById("parrotSpeech");
const chatBubble = document.getElementById("chatBubble");
const sassyParrot = document.getElementById("sassyParrot");

const sassyComments = [
  "Another click, really? Are you even trying?",
  "You're getting warmer... or is that just me?",
  "If you find the treasure, I expect 50% of the gold.",
  "My grandma could find it faster, and she's a rock.",
  "Hint: It's not *behind* the map.",
  "Are you sure you checked under your keyboard?",
  "I'm getting bored. Hurry up, human!",
  "Feathers ruffled, waiting for you to get it right.",
  "You almost had it! Just kidding.",
  "Just a bit more... to the left... no, MY left.",
];

let commentIndex = 0;
let displayTimeout;

function showSassyComment() {
  chatBubble.style.opacity = "0";
  chatBubble.style.visibility = "hidden";
  clearTimeout(displayTimeout);

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * sassyComments.length);
  } while (newIndex === commentIndex && sassyComments.length > 1);

  commentIndex = newIndex;
  parrotSpeechElement.textContent = sassyComments[commentIndex];

  chatBubble.style.opacity = "1";
  chatBubble.style.visibility = "visible";

  displayTimeout = setTimeout(() => {
    chatBubble.style.opacity = "0";
    chatBubble.style.visibility = "hidden";
  }, 4000);
}

setTimeout(showSassyComment, 2000);
setInterval(showSassyComment, 8000);
sassyParrot.addEventListener("click", showSassyComment);
