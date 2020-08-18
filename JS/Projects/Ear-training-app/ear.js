let sideButtons = document.querySelectorAll("div.side-buttons button");
let chooseButtons = document
  .getElementById("choice-buttons-div")
  .getElementsByTagName("button");
let intervalArray = [];
let questionNum = 0;
let sideArray = [];

for (let i = 0; i < sideButtons.length; i++) {
  if (sideButtons[i].textContent !== "RANDOM") {
    sideButtons[i].onclick = function (e) {
      //alert (this.innerHTML)
      let buttonHTML = this.textContent;

      //link to create choice button function
      choiceButtons(buttonHTML);
    };
  }
}

/*function noDuplicates (sideRandom, array) {
  array.splice(array.length-1, 1);
  console.log(array);
  let sideRandom2 = Math.floor(Math.random() * 14) + 1;
  sideArray.push(sideRandom2);
  console.log("I've had to add " + sideRandom2)
}*/

function sortNumbers(array) {
  array.sort(function (a, b) {
    return a - b;
  });
}

function orderButtons(array) {
  for (i in array) {
    if (array.length >= 3) {
      sortNumbers(array);
      let sideElements = array[i];
      choiceButtons(sideButtons[sideElements].textContent);

      console.log(array);
    }
  }
}

document.getElementById("randomiser").addEventListener("click", function () {
  let sideArray = [];
  for (let i = 0; sideArray.length < 3; i++) {
    let sideRandom = Math.floor(Math.random() * 14) + 1;
    console.log(sideRandom);
    if (!sideArray.includes(sideRandom)) {
      sideArray.push(sideRandom);
    } else {
      continue;
    }
  }
  console.log(sideArray.toString());
  orderButtons(sideArray);
});

function choiceButtons(innerText) {
  //create button
  if (intervalArray.indexOf(innerText) === -1) {
    let choiceBtn = document.createElement("BUTTON");

    //add inner text to choice buttons
    choiceBtn.textContent = innerText;

    //append to choce-buttons-div
    document.getElementById("choice-buttons-div").appendChild(choiceBtn);
    choiceBtn.className = "choice-buttons";
    //push innerText to array
    intervalArray.push(innerText);
    console.log(intervalArray);
    //setButtons(innerText);
  }
}

document.getElementById("start-button").addEventListener("click", function () {
  let random = Math.floor(Math.random() * intervalArray.length);
  let randomInterval = intervalArray[random];
  triggerSounds(randomInterval);
  console.log(intervalArray[random]);
  questionNum++;
  console.log("this is question " + questionNum);
  setScore(randomInterval);
});

function triggerSounds(randomInterval) {
  switch (randomInterval) {
    case "MINOR SECOND":
      document.getElementById("min-2-sound").play();
      break;
    case "MAJOR SECOND":
      document.getElementById("maj-2-sound").play();
      break;
    case "MINOR THIRD":
      document.getElementById("min-3-sound").play();
      break;
    case "MAJOR THIRD":
      document.getElementById("maj-3-sound").play();
      break;
    case "FOURTH":
      document.getElementById("perf-4-sound").play();
      break;
    case "DIMINSHED FIFTH":
      document.getElementById("dim-5-sound").play();
      break;
    case "FIFTH":
      document.getElementById("perf-5-sound").play();
      break;
    case "MINOR SIXTH":
      document.getElementById("min-6-sound").play();
      break;
    case "MAJOR SIXTH":
      document.getElementById("maj-6-sound").play();
      break;
    case "MINOR SEVENTH":
      document.getElementById("min-7-sound").play();
      break;
    case "MAJOR SEVENTH":
      document.getElementById("maj-7-sound").play();
      break;
    case "OCTAVE":
      document.getElementById("octave-sound").play();
      break;
    case "MINOR NINTH":
      document.getElementById("min-9-sound").play();
      break;
    case "MAJOR NINTH":
      document.getElementById("maj-9-sound").play();
      break;
  }
}

function setScore(randomInterval) {
  let score = document.getElementById("score-num");
  let num = +score.innerHTML;
  for (i in chooseButtons) {
    chooseButtons[i].onclick = function (e) {
      if (this.innerHTML === randomInterval) {
        alert("That's right!");
        num++;
        score.innerHTML = num;
      } else alert("That's the wrong answer!");
    };
  }
}

//generate random number between 1 and 3
/*let questionNum = 0;

document.getElementById("start-button").addEventListener("click", function () {
  buttonEnable ();

  let random = Math.floor(Math.random() * 3) + 1;
  questionNum++
  console.log("this is question " + questionNum)
  questionNum < 10? this.textContent = "NEXT QUESTION": this.textContent = "GET YOUR SCORE";
  triggerSounds(random);
  console.log(random);
  setButtons(random, questionNum);
});

// declare score

function declareScore (score) {
  let firstH2 = document.getElementById('first-h2');
  document.body.removeChild(firstH2);
  let h2tag = document.createElement("H2");
    let textNode = document.createTextNode("Your score is " + score + " out of 10!");
    h2tag.appendChild(textNode);
    document.body.appendChild(h2tag);
    buttonDisable ();
    document.getElementById('start-button').disabled = true;


  //console.log("Your score is " + score + " out of 10!");
}



//write function to trigger sounds

/*function triggerSounds(interval) {
if (questionNum <=10) {
  if (interval === 1) {
      document.getElementById('maj-3-sound').play();
    } else if (interval === 2) {
        document.getElementById('perf-5th-sound').play();
    } else if (interval === 3) {
      document.getElementById('octave-sound').play();
   }
  }
}



//set set buttons
// set scores*/

/*function setButtons(number, questionNum) {
  let score = document.getElementById('score-num')
  let num = +(score.innerHTML);
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      if (number === 1 && this.id === "maj-3") {
        alert("That's right - it was a major 3rd interval!");
            num++;
            score.innerHTML = num;
              buttonDisable ();

      } else if (number === 1 && this.id !== "maj-3" && this.id !== "start-button") {
        alert("You're wrong!");
            questionNum++;
            console.log("we're moving to " + questionNum);
            buttonDisable ();

      } if (number === 2 && this.id === "perf-5") {
        alert("That's right - it was a a perfect 5th interval!");
            num++;
            score.innerHTML = num;
              buttonDisable ();

      } else if (number === 2 && this.id !== "perf-5" && this.id !== "start-button") {
        alert("You're wrong!");
            questionNum++;
            console.log("we're moving to " + questionNum);
            buttonDisable ();

    } if (number === 3 && this.id === "octave") {
      alert("That's right - it was an octave interval!");
          num++;
          score.innerHTML = num;
            buttonDisable ();
    } else if (number === 3 && this.id !== "octave" && this.id !== "start-button") {
      alert("You're wrong!");
          questionNum++;
          console.log("we're moving to " + questionNum);
          buttonDisable ();

   }
  }
 }

if (questionNum  > 10) {
  declareScore (num);
  }

  }


function buttonDisable () {
  document.getElementById('maj-3').disabled = true;
  document.getElementById('perf-5').disabled = true;
  document.getElementById('octave').disabled = true;
}

function buttonEnable () {
  document.getElementById('maj-3').disabled = false;
  document.getElementById('perf-5').disabled = false;
  document.getElementById('octave').disabled = false;
}
*/
