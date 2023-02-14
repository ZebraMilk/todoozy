// here will be one massive object or array that contains all the todos
import { createTodoCard } from "./ui";

function todoLibrary() {
  let todoList = [];

  function addTodo(todo) {
    todoList.push(todo);
    console.log("todo added to library");
  }

  function removeTodo(id) {
    todoList.splice(id, 1);
    console.log("todo removed from library");
  }

  function getLibrary() {
    console.table(todoList);
    const frozenTodoList = [...todoList];
    return Object.freeze(frozenTodoList); // the freeze here is making this array non extensible?
    // maybe try to return a copy of it? But then if the user goes to modify something on the UI, how do I reach deep into the todoList to change that object?
  }

  function displayTodoListDefault() {
    todoList.forEach((todoozy) => createTodoCard(todoozy));
  }

  function loadLocalStorage() {
    todoList = JSON.parse(localStorage.getItem("library"));
  }

  function getLocalStorage (e) {
    console.log(typeof(e));
    e.preventDefault();
    const storedLibrary = JSON.parse(localStorage.getItem("library"));
    console.table(storedLibrary)
    return storedLibrary;
  }

  function saveToLocalStorage(e) {
    e.preventDefault();
    localStorage.setItem("library", `${JSON.stringify(todoList)}`);
    console.log("Library Saved!!!")

  }

  return Object.freeze({
    addTodo,
    removeTodo,
    getLibrary,
    displayTodoListDefault,
    getLocalStorage,
    saveToLocalStorage,
    loadLocalStorage
  });
}

const library = todoLibrary();

export { library };

console.log("library loaded");