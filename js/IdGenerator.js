export class IdGenerator {

  constructor() {
    this.counter = 0;
  }

  generate() {
    this.counter = this.counter + 1;
    return this.counter;
  }

}
