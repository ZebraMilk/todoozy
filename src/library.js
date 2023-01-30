// here will be one massive object or array that contains all the todos


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

  function displayLibrary() {
    console.table(todoList);
  }

  return Object.freeze({
    addTodo,
    removeTodo,
    displayLibrary,
  });
}

export { todoLibrary };

console.log("library loaded");