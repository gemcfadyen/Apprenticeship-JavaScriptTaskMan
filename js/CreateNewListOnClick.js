export class TaskList {
  constructor(value) {
    this.listName = value;
  }

  get name() {
    return this.listName;
  }

  set name(value) {
    this.listName = value;
  }
}
