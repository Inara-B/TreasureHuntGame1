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
let displayTimeout; // To clear existing timeouts

function showSassyComment() {
  // Hide current bubble if any
  chatBubble.style.opacity = "0";
  chatBubble.style.visibility = "hidden";

  // Clear any existing timeout to prevent overlapping messages
  clearTimeout(displayTimeout);

  // Get a random comment that isn't the current one (if possible)
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * sassyComments.length);
  } while (newIndex === commentIndex && sassyComments.length > 1); // Avoid repeating if possible

  commentIndex = newIndex;
  parrotSpeechElement.textContent = sassyComments[commentIndex];

  // Show the bubble
  chatBubble.style.opacity = "1";
  chatBubble.style.visibility = "visible";

  // Hide the bubble after a few seconds
  displayTimeout = setTimeout(() => {
    chatBubble.style.opacity = "0";
    chatBubble.style.visibility = "hidden";
  }, 4000); // Display for 4 seconds
}

// Initial comment after a delay
setTimeout(showSassyComment, 2000); // Show first comment after 2 seconds

// Set interval to change comment every few seconds
setInterval(showSassyComment, 8000); // Change comment every 8 seconds (4s display + 4s hidden)

// Optional: Show comment on parrot click
sassyParrot.addEventListener("click", showSassyComment);
