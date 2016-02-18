export class ToDoPresenterSpy {
  constructor() {
    this.paintHasBeenCalled = false;
  }

  paint(todo) {
    this.paintHasBeenCalled = true;
    return "Updated";
  }

  get paintCalled() {
    return this.paintHasBeenCalled;
  }
}
