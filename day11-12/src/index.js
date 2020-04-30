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
  if (num && tempNum !== "") {
    const result = switchOpertor();
    input.innerText = result;
    tempNum = result;
    num = "";
    return;
  }
  tempNum = num;
  tempNum = parseInt(tempNum);
  num = "";
}

function handleEqual(event) {
  const result = switchOpertor();
  input.innerText = result;
  tempNum = result;
}

function handleReset(event) {
  num = "";
  tempNum = "";
  input.innerText = 0;
}

function switchOpertor() {
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
  return result;
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
