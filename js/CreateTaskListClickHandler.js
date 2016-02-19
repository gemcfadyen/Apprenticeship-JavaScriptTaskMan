import * as ToDo from "../js/ToDo";

export class CreateTaskListClickHandler {
  constructor(painter) {
    this.listPresenter = painter;
    console.log("presenter is " + this.listPresenter);
    this.taskListButton = document.getElementById('taskListButton');
    this.taskListButton.addEventListener("click", (e) => { this.onClick(e); e.preventDefault();});
  }

  onClick(evt) {
    let taskListName = document.getElementById('taskListBox');
    console.log("todo entered: " + taskListName.value);
    let taskList = new ToDo.ToDo(taskListName.value);
    this.listPresenter.paint(taskList);
  }
}
