const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  pending = document.querySelector(".js-pending"),
  finished = document.querySelector(".js-finished");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let toDos = [];
let finishedToDos = [];

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", throwToFinish);
  span.innerText = text;
  li.id = newId;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  pending.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveTodo();
}

function finishTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finishedToDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinished);
  checkBtn.innerText = "🔼";
  checkBtn.addEventListener("click", backTodo);
  span.innerText = text;
  li.id = newId;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  finished.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  finishedToDos.push(toDoObj);
  finishedTodo();
}

function throwToFinish(event) {
  const checkLi = event.target.parentNode;
  finished.appendChild(checkLi);
  const toDoID = checkLi.id;
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(toDoID);
  });
  toDos = cleanToDos;
  saveTodo();

  checkLi.querySelectorAll("button")[1].innerText = "🔼";
  const text = checkLi.querySelector("span").innerText;
  const toDoObj = {
    text: text,
    id: finishedToDos.lenght + 1,
  };
  finishedToDos.push(toDoObj);
  finishedTodo();
}

function saveTodo() {
  localStorage.setItem(PENDING_LS, JSON.stringify(toDos));
}

function finishedTodo(event) {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDos));
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function loadFinished() {
  const loadedFinish = localStorage.getItem(FINISHED_LS);
  if (loadedFinish !== null) {
    const parsedFinish = JSON.parse(loadedFinish);
    parsedFinish.forEach(function (toDo) {
      finishTodo(toDo.text);
    });
  }
}

function backTodo(event) {
  const checkLi = event.target.parentNode;
  console.log(checkLi);
  pending.appendChild(checkLi);
  const toDoID = checkLi.id;
  const cleanToDos = finishedToDos.filter(function (toDo) {
    return toDo.id !== parseInt(toDoID);
  });
  finishedToDos = cleanToDos;
  finishedTodo();

  checkLi.querySelectorAll("button")[1].innerText = "✅";
  const text = checkLi.querySelector("span").innerText;
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  saveTodo();
}

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveTodo();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finished.removeChild(li);
  const cleanToDos = finishedToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finishedToDos = cleanToDos;
  finishedTodo();
}

function handleSubmit(event) {
  event.preventDefault();
  const curruentValue = input.value;
  paintToDo(curruentValue);
  input.value = "";
}

function init() {
  loadPending();
  loadFinished();
  form.addEventListener("submit", handleSubmit);
}

init();
