let sideButtons = document.querySelectorAll("div.side-buttons button");
let chooseButtons = document
  .getElementById("choice-buttons-div")
  .getElementsByTagName("button");
let intervalArray = [];
let questionNum = 0;

for (let i = 0; i < sideButtons.length; i++) {
  sideButtons[i].onclick = function (e) {
    //alert (this.innerHTML)
    let buttonHTML = this.innerHTML;

    //link to create choice button function
    choiceButtons(buttonHTML);
  };
}

function choiceButtons(innerText) {
  if (intervalArray.indexOf(innerText) === -1) {
    //create button
    let choiceBtn = document.createElement("BUTTON");

    //add inner text to choice buttons
    choiceBtn.innerHTML = innerText;

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
  console.log(intervalArray[random]);
  let randomInterval = intervalArray[random];
  triggerSounds(randomInterval);
  questionNum++;
  console.log("this is question " + questionNum);
  setScore(randomInterval);
});

function triggerSounds(randomInterval) {
  switch (randomInterval) {
    case "UNISON":
      document.getElementById("unison-sound").play();
      break;
    case "MINOR SECOND":
      //play UNISON
      break;
    case "MAJOR SECOND":
      //play UNISON
      break;
    case "MINOR THIRD":
      //play UNISON
      break;
    case "MAJOR THIRD":
      document.getElementById("maj-3-sound").play();
      break;
    case "FOURTH":
      //play UNISON
      break;
    case "DIMINSHED FIFTH":
      //play UNISON
      break;
    case "FIFTH":
      document.getElementById("perf-5th-sound").play();
      break;
    case "MINOR SIXTH":
      //play UNISON
      break;
    case "MAJOR SIXTH":
      //play UNISON
      break;
    case "MINOR SEVENTH":
      //play UNISON
      break;
    case "MAJOR SEVENTH":
      //play UNISON
      break;
    case "OCTAVE":
      document.getElementById("octave-sound").play();
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
