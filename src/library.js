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
    todoList.forEach(createTodoCard);
  }

  return Object.freeze({
    addTodo,
    removeTodo,
    getLibrary,
    displayTodoListDefault
  });
}

const library = todoLibrary();

export { library };

console.log("library loaded");