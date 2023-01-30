// do DOM stuff here
// imports?
import { library } from "./library.js";
// grab the form fields
const todoForm = document.querySelector(".add-todo-fields");
const todoozyDisplay = document.getElementById("todoozy-display");

const todoTitle = document.getElementById("title");
const todoDescription = document.getElementById("description");
const todoDueDate = document.getElementById("due-date");
const todoProject = document.getElementById("project");
// function to store fields into a new todo object
function captureFields(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: todoTitle.value,
    description: todoDescription.value,
    dueDate: new Date(todoDueDate.value.split("-").join(", ")),
    project: todoProject.value,
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
  const todoInput = document.querySelector(".add-todo-fields");
  // const todoDisplay = document.querySelector(".todoozy-display");
  const addBtn = document.createElement("button");

  addBtn.addEventListener("click", (e) => {
    const todoozy = captureFields(e);
    addToLibrary(todoozy);
  });

  addBtn.classList.add("make-todo-button");
  addBtn.innerText = "Make Todoozy";
  todoInput.appendChild(addBtn);

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
  const title = document.createElement("h1");
  const description = document.createElement("details");
  const dueDate = document.createElement("div");
  const project = document.createElement("h4");

  todoCard.classList.add("todoozy");
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

// make a test button to display the library
const displayButton = document.createElement("button");
displayButton.addEventListener("click", (e) => updateDisplayDefault(e));
displayButton.classList.add("display-button");
displayButton.innerText = "Display Todos";
todoForm.appendChild(displayButton);

export { loadUI, createTodoCard };
