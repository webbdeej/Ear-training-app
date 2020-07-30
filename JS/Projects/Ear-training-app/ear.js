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

//set set buttons
// set scores

function setButtons(number) {
  let score = document.getElementById("score-num");
  let num = +score.innerHTML;
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      if (number === 1 && this.id === "maj-3") {
        alert("That's right - it was a major 3rd interval!");
        num = num + 2;
        score.innerHTML = num;
      } else if (
        number === 1 &&
        this.id !== "maj-3" &&
        this.id !== "start-button"
      ) {
        alert("You're wrong!");
      }
      if (number === 2 && this.id === "perf-5") {
        alert("That's right - it was a a perfect 5th interval!");
        num = num + 2;
        score.innerHTML = num;
      } else if (
        number === 2 &&
        this.id !== "perf-5" &&
        this.id !== "start-button"
      ) {
        alert("You're wrong!");
      }
      if (number === 3 && this.id === "octave") {
        alert("That's right - it was an octave interval!");
        num = num + 2;
        score.innerHTML = num;
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
