// do DOM stuff here
// imports?

// button to add a todo
export default function loadUI() {
  const todoDisplay = document.querySelector(".todoozy-display");
  const addBtn = document.createElement("button");

  addBtn.classList.add("make-todo-button");
  addBtn.innerText = "Make Todoozy";
  todoDisplay.appendChild(addBtn);

  console.log("UI Changed");
}

// 
