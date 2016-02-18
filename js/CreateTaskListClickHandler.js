import * as TaskList from "../js/TaskList";

export class CreateTaskListClickHandler {
  constructor(painter) {
    console.log("in constructor "  + painter);
    this.listPresenter = painter;
    console.log("presenter is " + this.listPresenter);
    this.taskListButton = document.getElementById('taskListButton');
    this.taskListButton.addEventListener("click", (e) => { this.onClick(e); e.preventDefault();});
  }

  onClick(evt) {
    let taskListName = document.getElementById('taskListBox');
    console.log("List name: " + taskListName.value);
    let taskList = new TaskList.TaskList(taskListName.value);
    let newContent = this.listPresenter.paint(taskList);

    //document.getElementById('todos').appendChild(document.createTextNode("bar"));

    $('#todos').append(newContent);
  }
}
