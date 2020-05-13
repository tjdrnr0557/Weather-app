const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentNode;
  console.log("li id", li.id);
  toDoList.removeChild(li);
  const change = toDos.filter(todo => todo.newId !== parseInt(li.id));
  console.log(change);
  toDos = change;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.style.backgroundColor = "white";
  delBtn.addEventListener("click", deleteToDo);
  const li = document.createElement("li");
  const newId = toDos.length + 1;
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const newObj = { text, newId };
  toDos.push(newObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
