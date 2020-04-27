const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  pending = document.querySelector(".js-pending"),
  finished = document.querySelector(".js-finished");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let toDos = [];
let finishedToDos = [];
let idIndex = 0;
let FidIndex = 0;

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", finishTodo);
  span.innerText = text;
  li.id = ++idIndex;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  pending.appendChild(li);
  toDoObj = {
    text: text,
    id: idIndex,
  };
  toDos.push(toDoObj);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(PENDING_LS, JSON.stringify(toDos));
}

function finishedTodo(event) {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDos));
}

function loadTodo() {
  const loadedToDo = localStorage.getItem(PENDING_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function backTodo(event) {}

function finishTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  checkBtn.innerText = "🔼";
  checkBtn.addEventListener("click", backTodo);
  span.innerText = text;
  li.id = ++FidIndex;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  pending.appendChild(li);
  toDoObj = {
    text: text,
    id: FidIndex,
  };
  finishedToDos.push(toDoObj);
  finishedTodo();
}

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveTodo();
}

function handleSubmit(event) {
  event.preventDefault();
  const curruentValue = input.value;
  paintToDo(curruentValue);
  input.value = "";
}

function init() {
  loadTodo();
  form.addEventListener("submit", handleSubmit);
}

init();
