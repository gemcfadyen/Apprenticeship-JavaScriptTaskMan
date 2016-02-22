export class ToDo {

  constructor(value, idGenerator) {
    this.taskDescription = value;
    this.id = idGenerator.generate();
  }

  get description() {
    return this.taskDescription;
  }

  set description(value) {
    this.taskDescription = value;
  }

  get uniqueId() {
    return this.id;
  }
}
