const number = document.getElementsByClassName("jsNumber"),
  input = document.getElementById("jsInput"),
  operator = document.getElementsByClassName("jsOperator"),
  equal = document.getElementById("jsEqual"),
  reset = document.getElementById("reset");

let num = "";
let tempNum = "";
let op;

function handleNumberClick(event) {
  num += event.target.innerText;
  num = parseInt(num);
  console.log(num);
  input.innerText = num;
}

function handleOperate(event) {
  op = event.target.innerText;
  console.log(op);
  tempNum = num;
  tempNum = parseInt(tempNum);
  num = "";
}

function handleEqual(event) {
  let result;
  switch (op) {
    case "+":
      result = tempNum + num;
      break;
    case "-":
      result = tempNum - num;
      break;
    case "*":
      result = tempNum * num;
      break;
    case "/":
      result = tempNum / num;
      break;
  }
  input.innerText = result;
  num = result;
  tempNum = "";
}

function handleReset(event) {
  num = "";
  tempNum = "";
  input.innerText = 0;
}

function init() {
  Array.from(number).forEach((number) =>
    number.addEventListener("click", handleNumberClick)
  );
  Array.from(operator).forEach((operator) =>
    operator.addEventListener("click", handleOperate)
  );
  equal.addEventListener("click", handleEqual);
  reset.addEventListener("click", handleReset);
}

init();
