export class TaskList {
  constructor(value) {
    this.listName = value;
    this.todoTasks = [];
  }

  get name() {
    return this.listName;
  }

  set name(value) {
    this.listName = value;
  }

  get todos() {
    return this.todoTasks;
  }

  set todos(value) {
    this.todoTasks = value;
  }

  add(todo) {
    this.todoTasks.push(todo);
  }
}
