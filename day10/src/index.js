const range = document.getElementById("jsRange");
const barValue = document.getElementById("jsValue");
const chose = document.querySelector(".chose");
const input = document.getElementById("guess__number");
const button = document.getElementById("guess__button");
const choseNumber = document.getElementById("chose__number");
const choseRandom = document.getElementById("chose__random");
const jsResult = document.getElementById("result");

let randNum = 0;

function handleInput(event) {
  const value = event.target.value;
  randNum = value;
  barValue.innerText = value;
}

function handleSubmit(event) {
  const random = Math.floor(Math.random() * randNum);
  const value = input.value;
  choseRandom.innerText = random;
  choseNumber.innerText = value;
  chose.className = "showing";
  if (random == value) {
    jsResult.innerText = "You won!";
  } else {
    jsResult.innerText = "You lost!";
  }
}

function init() {
  range.addEventListener("input", handleInput);
  button.addEventListener("click", handleSubmit);
}

init();
