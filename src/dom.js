



// const todoForm = document.querySelector(".add-todo-fields");
// const todoozyDisplay = document.getElementById("todoozy-display");

// const addBtn = document.querySelector(".add-todo-button");
// const makeTodoButton = document.querySelector(".toggle-make-todo");
// const displayButton = document.querySelector(".display-todos");

const todoTitle = document.getElementById("title");
const todoDescription = document.getElementById("description");
const todoDueDate = document.getElementById("due-date");
const todoProject = document.getElementById("project");
const todoCompleted = document.getElementById("completed");



export const todoInput = {
  todoTitle: todoTitle.value,
  todoDescription: todoDescription.value,
  todoDueDate: todoDueDate.value,
  todoProject: todoProject.value,
  todoCompleted: todoCompleted.value
}

