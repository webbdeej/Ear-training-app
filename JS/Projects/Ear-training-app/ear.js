//generate random number between 1 and 3

document.getElementById("start-button").addEventListener("click", function () {
  let random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  setButtons(random);
  triggerSounds(random);
});

//




//write function to trigger sounds

function triggerSounds(interval) {
if (interval === 1) {
  document.getElementById('maj-3-sound').play();
} else if (interval === 2) {
    document.getElementById('perf-5th-sound').play();
} else (interval === 3) {
  document.getElementById('octave-sound').play();
 }

}


function setButtons(number) {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      if (number === 1 && this.id === "maj-3") {
        alert("that's right - it was a major 3rd interval!");
      } else if (this.id !== "maj-3" && this.id !== "start-button") {
        alert("You're wrong!");
      }
    };
  }
}
