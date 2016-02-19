export class ToDo {

  constructor(value, numberFountain) {
    this.taskDescription = value;
    this.id = numberFountain.generate();
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
