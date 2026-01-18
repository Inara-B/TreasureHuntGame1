// makes the START GAME text blink

function blink() {
  var b = document.getElementById("blnk");
  setInterval(function () {
    b.style.visibility = b.style.visibility === "hidden" ? "visible" : "hidden";
  }, 1000);
}
