import * as ToDo from "../js/ToDo";

export class CreateTaskListClickHandler {
  constructor(painter, idGenerator) {
    this.listPresenter = painter;
    this.idGenerator = idGenerator;
    this.taskListButton = document.getElementById('taskListButton');
    this.taskListButton.addEventListener("click", (e) => { this.onClick(e); e.preventDefault();});
  }

  onClick(evt) {
    let taskListName = document.getElementById('taskListBox');
    console.log("todo entered: " + taskListName.value);
    let taskList = new ToDo.ToDo(taskListName.value, this.idGenerator);
    this.listPresenter.paint(taskList);
  }
}
