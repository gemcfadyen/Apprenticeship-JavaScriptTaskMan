export class ToDo {

  constructor(value) {
    this.taskDescription = value;
  }

  get description() {
    return this.taskDescription;
  }

  set description(value) {
    this.taskDescription = value;
  }
}
