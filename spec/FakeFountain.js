export class FakeFountain {
  constructor(fakeRandom) {
    this.random = fakeRandom;
  }

  generate() {
    return this.random;
  }
}
