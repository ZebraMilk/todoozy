// do DOM stuff here
// imports?
import { library } from "./library.js";
import { todoInput } from "./dom.js";
// grab the form fields
const makeTodoDisplay = document.querySelector(".make-todo-display");
const todoForm = document.querySelector(".add-todo-fields");
const todoozyDisplay = document.getElementById("todoozy-display");

const addBtn = document.querySelector(".add-todo-button");
const makeTodoButton = document.querySelector(".toggle-make-todo");
const displayButton = document.querySelector(".display-todos");

const todoTitle = document.getElementById("title");
const todoDescription = document.getElementById("description");
const todoDueDate = document.getElementById("due-date");
const todoProject = document.getElementById("project");
const todoCompleted = document.getElementById("completed");

// test local storage with buttons
const saveTodo = document.querySelector(".save-todos");
const getTodo = document.querySelector(".get-todos");

// function to store fields into a new todo object
function captureFields(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: todoTitle.value,
    description: todoDescription.value,
    dueDate: new Date(todoDueDate.value.split("-").join(", ")),
    project: todoProject.value,
    completed: todoCompleted.value,
  };
  console.table(newTodo);
  todoForm.reset();
  return newTodo;
}
// function to add todo to library
function addToLibrary(newTodoozy) {
  library.addTodo(newTodoozy);
  library.getLibrary();
}

// button to add a todo
function loadUI() {
  // const todoDisplay = document.querySelector(".todoozy-display");

  addBtn.addEventListener("click", (e) => {
    if (todoTitle.value.trim() === "") {
      console.log("Needs a title");
      return;
    }
    const todoozy = captureFields(e);
    addToLibrary(todoozy);
    updateDisplayDefault(e);
  });
  // library.loadLocalStorage();
  saveTodo.addEventListener("click", (e) => library.saveToLocalStorage(e));
  getTodo.addEventListener("click", (e) => {
    library.loadLocalStorage();
    library.getLocalStorage(e);
  });
  // addBtn.classList.add("make-todo-button");
  // addBtn.innerText = "Make Todoozy";
  // todoForm.appendChild(addBtn);

  console.log("UI Changed");
}

function clearDisplay() {
  // Kinda gross, removes the last element child until it gets to the form.
  // need to find a better way of doing this. Maybe wrapping the todos in a container like a div, and clearing that container
  while (todoozyDisplay.lastElementChild) {
    todoozyDisplay.lastElementChild.remove();
  }
  return;
}

function createTodoCard(todoozy) {
  const todoCard = document.createElement("div");
  const title = document.createElement("p");
  const description = document.createElement("p");
  const dueDate = document.createElement("div");
  const project = document.createElement("p");

  todoCard.classList.add("todo-card", "todoozy");
  todoCard.id = `${todoozy.id}`;
  title.classList.add("todoozy-title");
  description.classList.add("todoozy-description");
  dueDate.classList.add("todoozy-due-date");
  project.classList.add("todoozy-project");

  // iterate over each property in the todoozy
  title.innerText = `${todoozy.title}`;
  description.innerText = `${todoozy.description}`;
  dueDate.innerText = `${todoozy.dueDate}`;
  project.innerText = `${todoozy.project}`;

  todoCard.append(title, description, dueDate, project);
  todoozyDisplay.appendChild(todoCard);
}

// update the display with our todos
function updateDisplayDefault(e) {
  e.preventDefault();
  // make it display from scratch even if no display, not just update
  if (todoozyDisplay.hasChildNodes()) {
    clearDisplay();
  }
  library.displayTodoListDefault(); // just to test for now

  // This is for iterating over the copy of the todoList that's returned and make cards of them
  // library.getLibrary().forEach((todoozy) =>
  //   createTodoCard(todoozy)
  // );
}
// TODO: make the "make todo" button display or hide the todofields

function toggleTodoFields(e) {
  e.preventDefault();
  if (makeTodoDisplay.classList.contains("hide")) {
    makeTodoDisplay.classList.remove("hide");
    makeTodoDisplay.classList.add("pop-out");
  } else {
    makeTodoDisplay.classList.add("hide");
    makeTodoDisplay.classList.remove("pop-out");
  }
}
// grab the dom stuff and add a listner
makeTodoButton.addEventListener("click", (e) => toggleTodoFields(e));

// make a test button to display the library
displayButton.addEventListener("click", (e) => updateDisplayDefault(e));

export { loadUI, createTodoCard };
