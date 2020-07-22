document.getElementById("start-button").addEventListener("click", function () {
  let random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  setButtons(random);
});

function setButtons(number) {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      if (number === 1 && this.id === "maj-2") {
        alert("that's right - it was a major 2nd interval!");
      } else if (this.id !== "maj-2" && this.id !== "start-button") {
        alert("Wrong!");
      }
    };
  }
}

