let sideButtons = document.querySelectorAll("div.side-buttons button");
let rightButtons = document.getElementById("right-buttons");

let chooseButtons = document
  .getElementById("choice-buttons-div")
  .getElementsByTagName("button");
let chooseDiv = document.getElementById("choice-buttons-div");
let choice = document.getElementById("choice").getElementsByTagName("*");
let intervalArray = [];
let questionNum = 0;
let sideArray = [];

let soundFiles = {
  "MINOR SECOND": "min-2nd.mp3",
  "MAJOR SECOND": "maj-2nd.mp3",
  "MINOR THIRD": "min-3rd.mp3",
  "MAJOR THIRD": "maj-3rd.mp3",
  FOURTH: "perf-4th.mp3",
  "DIMINISHED FIFTH": "dim-5th.mp3",
  FIFTH: "perf-5th.mp3",
  "MINOR SIXTH": "min-6th.mp3",
  "MAJOR SIXTH": "maj-6th.mp3",
  "MINOR SEVENTH": "min-7th.mp3",
  "MAJOR SEVENTH": "maj-7th.mp3",
  OCTAVE: "octave.mp3",
  "MINOR NINTH": "min-9th.mp3",
  "MAJOR NINTH": "maj-9th.mp3",
};

let audio = document.getElementById("my-audio");
let ascending = document.getElementById("ascending");
let descending = document.getElementById("descending");
let ascendDescend = document.getElementById("ascend-descend");
let fixedRoot = document.getElementById("fixed-root");
let changeRoot = document.getElementById("change-root");
let repeat = document.getElementById("hear-again");
//when side buttons are clicked, this toggles the 'on' class
for (let i = 0; i < sideButtons.length; i++) {
  if (sideButtons[i].textContent !== "RANDOM") {
    sideButtons[i].onclick = function (e) {
      //let textContent = this.textContent;
      this.classList.toggle("on");
      let classArray = this.className.split(" ");
      let buttonNum = +classArray[0];
      let index = sideArray.indexOf(buttonNum);
      let textContent = this.textContent;

      if (this.classList.contains("on")) {
        this.style.backgroundColor = "#428BCA";
        if (sideArray.includes(buttonNum === false)) {
          sideArray.push(buttonNum);
        }
        console.log(sideArray);
        choiceButtons(textContent);
        let intIndex = intervalArray.indexOf(textContent);

        console.log(intervalArray);
        chooseButtons[i - 1].classList.remove("choice-off");
      } else {
        if (intervalArray.length > 1) {
          this.style.backgroundColor = "";
          chooseButtons[i - 1].classList.add("choice-off");
          console.log("text for this button is " + this.textContent);
          let intIndex = intervalArray.indexOf(this.textContent);
          intervalArray.splice(intIndex, 1);
          console.log(intervalArray);
          sideArray.splice(index, 1);
        }
      }
    };
  }
}

//create buttons

function choiceButtons(innerText) {
  //create button

  if (intervalArray.indexOf(innerText) === -1) {
    console.log(intervalArray);
    intervalArray.push(innerText);
  }
}

randomArray = [];

document.getElementById("start-button").addEventListener("click", function () {
  for (i in chooseButtons) {
    chooseButtons[i].disabled = false;
  }

  if (intervalArray.length >= 1) {
    buttonDisable();
    this.textContent = "HEAR NEXT QUESTION";
    let random = Math.floor(Math.random() * intervalArray.length);

    randomArray.push(random);
    console.log(randomArray);
    let randomInterval = intervalArray[random];
    if (questionNum < 10) {
      triggerSounds(randomInterval);
    }
    if (questionNum === 9) {
      document.getElementById("start-button").disabled = true;
    }

    console.log(intervalArray[random]);
    questionNum++;
    console.log("this is question " + questionNum);
    setScore(randomInterval);
    document.getElementById("choice").style.visibility = "visible";
    document.getElementById("choice-heading").style.visibility = "visible";
    repeat.style.display = "block";
  }
});

let width = 0;

function progress() {
  let elem = document.getElementById("myBar");
  if (width < 100) {
    width += 10;
    elem.style.width = width + "%";
  }
}

function triggerSounds(randomInterval) {
  let ascendAudio = "Audio/ascending/" + soundFiles[randomInterval];
  let descendAudio = "Audio/descending/" + soundFiles[randomInterval];
  let harmonicAudio = "Audio/harmonic/" + soundFiles[randomInterval];

  if (fixedRoot.selected) {
    if (ascending.selected) {
      audio.setAttribute("src", ascendAudio);
    } else if (descending.selected === true) {
      audio.setAttribute("src", descendAudio);
    } else if (harmonic.selected) {
      audio.setAttribute("src", harmonicAudio);
    } else if (ascendDescend.selected === true) {
      let whichOne = Math.floor(Math.random() * 2);
      console.log("random num = " + whichOne);
      whichOne === 0
        ? audio.setAttribute("src", ascendAudio)
        : audio.setAttribute("src", descendAudio);
    }
  } else if (changeRoot.selected === true) {
    changingRoot(randomInterval);
  }
  audioSpeed(audio);
  audio.play();
  console.log(audio);
}

function audioSpeed(audio) {
  let mediSpeed = document.getElementById("medium");
  let slowSpeed = document.getElementById("slow");
  let fastSpeed = document.getElementById("fast");

  if (mediSpeed.selected) {
    audio.playbackRate = 1;
  } else if (slowSpeed.selected) {
    audio.playbackRate = 0.7;
  } else if (fastSpeed.selected) {
    audio.playbackRate = 1.7;
  }
}

function changingRoot(randomInterval) {
  let assign = Math.floor(Math.random() * 3);
  let changeAscend =
    "Audio/ascending/changing-root/" +
    assign +
    "-" +
    soundFiles[randomInterval];
  if (changeRoot.selected && ascending.selected) {
    console.log("this is changeAscend: " + changeAscend);
    console.log(assign);
    audio.setAttribute("src", changeAscend);
  }
}

repeat.addEventListener("click", function () {
  audio.play();
});

/*switch(randomInterval) {
    case "MINOR SECOND":
      document.getElementById('min-2-sound').play();
    break;
    case "MAJOR SECOND":
      document.getElementById('maj-2-sound').play();
    break;
    case "MINOR THIRD":
      document.getElementById('min-3-sound').play();
    break;
    case "MAJOR THIRD":
    document.getElementById('maj-3-sound').play();
    break;
    case "FOURTH":
      document.getElementById('perf-4-sound').play();
    break;
    case "DIMINISHED FIFTH":
      document.getElementById('dim-5-sound').play();
    break;
    case "FIFTH":
    document.getElementById('perf-5-sound').play();
    break;
    case "MINOR SIXTH":
      document.getElementById('min-6-sound').play();
    break;
    case "MAJOR SIXTH":
      document.getElementById('maj-6-sound').play();
    break;
    case "MINOR SEVENTH":
      document.getElementById('min-7-sound').play();
    break;
    case "MAJOR SEVENTH":
    document.getElementById('maj-7-sound').play();
    break;
    case "OCTAVE":
    document.getElementById('octave-sound').play();
    break;
    case "MINOR NINTH":
    document.getElementById('min-9-sound').play();
    break
    case "MAJOR NINTH":
    document.getElementById('maj-9-sound').play();
    break;
  }*/

function buttonDisable() {
  document.getElementById("minor-second").disabled = true;
  document.getElementById("major-second").disabled = true;
  document.getElementById("minor-third").disabled = true;
  document.getElementById("major-third").disabled = true;
  document.getElementById("perf-fourth").disabled = true;
  document.getElementById("dim-fifth").disabled = true;
  document.getElementById("fifth").disabled = true;
  document.getElementById("minor-sixth").disabled = true;
  document.getElementById("major-sixth").disabled = true;
  document.getElementById("minor-seventh").disabled = true;
  document.getElementById("major-seventh").disabled = true;
  document.getElementById("octave-button").disabled = true;
  document.getElementById("minor-ninth").disabled = true;
  document.getElementById("major-ninth").disabled = true;
}

function clear(array) {
  document.getElementById("clear").addEventListener("click", function () {
    let parent = chooseDiv;
    removeAllChildNodes(parent);
  });
}

function setScore(randomInterval) {
  let score = document.getElementById("score-num");
  let num = +score.textContent;
  let question = document.getElementById("question-num");
  let correct = document.getElementById("right-answer");
  let wrong = document.getElementById("wrong-answer");
  for (i in chooseButtons) {
    chooseButtons[i].onclick = function (e) {
      choiceDisable();
      if (this.textContent === randomInterval) {
        correct.play();
        num++;
        question.textContent = questionNum * 10;
        progress();
        if (num <= 10) {
          score.textContent = num;
        }
      } else if (this.textContent !== randomInterval) {
        wrong.play();
        question.textContent = questionNum * 10;
        progress();
        if (num >= 0) {
          num--;
        }
      }
    };
  }
}

function choiceDisable() {
  for (var i = 0; i < choice.length; i++) {
    choice[i].disabled = true;
  }
}

document.getElementById("randomiser").addEventListener("click", function () {
  for (let i = 0; sideArray.length < 3; i++) {
    let sideRandom = Math.floor(Math.random() * 14) + 1;
    console.log(sideRandom);
    if (!sideArray.includes(sideRandom)) {
      sideButtons[sideRandom].click();
      sideArray.push(sideRandom);
    } else {
      continue;
    }
  }
  console.log(sideArray.toString());
});
