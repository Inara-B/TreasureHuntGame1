const map = document.getElementById("map");
const winRadius = 10; // Smaller radius for harder mode

const getRandomNumber = (size) => Math.floor(Math.random() * size);

const getDistance = (event, target) => {
  const diffX = event.offsetX - target.x;
  const diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

const getDistanceHint = (distance) => {
  if (distance < 5) return "Boiling hot!";
  else if (distance < 10) return "Really hot";
  else if (distance < 20) return "Hot";
  else if (distance < 40) return "Warm";
  else if (distance < 80) return "Cold";
  else if (distance < 160) return "Really cold";
  else return "Freezing!";
};

const width = 600;
const height = 600;
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
    window.location.href = `/hardend/?time=${seconds}&clicks=${clicks}&mode=Hard`;
  }
});

// Parrot logic for sassy comments
const parrotSpeechElement = document.getElementById("parrotSpeech");
const chatBubble = document.getElementById("chatBubble");
const sassyParrot = document.getElementById("sassyParrot");

const sassyComments = [
  "Hard mode is no joke, you know.",
  "Think you can handle this?",
  "Don't give up! Or do... I won't judge.",
  "I bet you’re sweating under those feathers.",
  "It's getting tricky, isn't it?",
  "Careful, one wrong move and you start over!",
  "Are you lost? I am.",
  "This parrot's patience is running thin.",
  "You almost had it! Maybe next time.",
  "Try looking under that pixel...",
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
