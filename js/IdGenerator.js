export class IdGenerator {

  constructor(min, max, fountain) {
    this.minimum = min;
    this.maximum = max;
    this.fountain = fountain;

  }

  generate() {
    return this.fountain.generate() * (this.maximum - this.minimum) + this.minimum;
  }

}
