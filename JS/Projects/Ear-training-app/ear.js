//generate random number between 1 and 3

document.getElementById("start-button").addEventListener("click", function () {
  let random = Math.floor(Math.random() * 3) + 1;
  triggerSounds(random);
  console.log(random);
  setButtons(random);
});

//

//write function to trigger sounds

function triggerSounds(interval) {
  if (interval === 1) {
    document.getElementById("maj-3-sound").play();
  } else if (interval === 2) {
    document.getElementById("perf-5th-sound").play();
  } else if (interval === 3) {
    document.getElementById("octave-sound").play();
  }
}

function setButtons(number) {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      if (number === 1 && this.id === "maj-3") {
        alert("that's right - it was a major 3rd interval!");
      } else if (
        number === 1 &&
        this.id !== "maj-3" &&
        this.id !== "start-button"
      ) {
        alert("You're wrong!");
      }
      if (number === 2 && this.id === "perf-5") {
        alert("that's right - it was a a perfect 5th interval!");
      } else if (
        number === 2 &&
        this.id !== "perf-5" &&
        this.id !== "start-button"
      ) {
        alert("You're wrong!");
      }
      if (number === 3 && this.id === "octave") {
        alert("that's right - it was an octave interval!");
      } else if (
        number === 3 &&
        this.id !== "octave" &&
        this.id !== "start-button"
      ) {
        alert("You're wrong!");
      }
    };
  }
}
