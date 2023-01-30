// do DOM stuff here
// imports?
import { todoLibrary } from "./library.js";
// grab the form fields
const todoForm = document.querySelector(".add-todo-fields");

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
  todoLibrary.addTodo(newTodoozy);
  todoLibrary.displayLibrary();
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


// update the display with our todos

export { loadUI };
