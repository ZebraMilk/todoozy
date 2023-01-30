import { formatDistanceToNow } from "date-fns";
import { todoLibrary } from "./library";

// logic for making todo Objs here

// try factory function, specifically, to avoid class sugar or inheritance
function Todo(todo) {
  this.title = todo.title;
  this.description = todo.description;
  this.project = todo.project;
  this.dueDate = todo.dueDate;
  function howMuchTime() {
    return formatDistanceToNow(this.dueDate);
  }

  // return the object with methods of manipulating data
  // freeze the returned object
  return {
    todo,
  };
}
// sample todo object for development
const sampleTodoozy = {
  id: Date.now(),
  title: "Make the bed",
  description: "long, lovely description of the item. Maybe a poem.",
  project: "associated project",
  dueDate: new Date(2023, 1, 26),
  howMuchTime: function () {
    return formatDistanceToNow(this.dueDate);
  },
  priority: "Urgent",
  notes: "Here goes a bunch of string. maybe in markdown eventually.",
  checklist: {},
  tags: { tag1: "Sample", tag2: "tags", tag3: "for-review" },
};


export { sampleTodoozy, Todo };
