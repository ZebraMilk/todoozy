

// here will be one massive object that contains all the todos

function todoLibrary() {
  let todoList = [];
  
  function addTodo(todo) {
    todoList.push(todo);
    console.log("todo added to library");
  };
  
  function removeTodo() {
    
    console.log("todo removed from library");
  }

  return Object.freeze({
    addTodo,
    removeTodo
  });

}

const library = todoLibrary();
export default library;



console.log("loaded from library");