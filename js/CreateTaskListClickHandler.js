import * as TaskList from "../js/TaskList";

export class CreateTaskListClickHandler {
  constructor(painter) {
    console.log("in constructor "  + painter);
    this.listPresenter = painter;
    console.log("presenter is " + this.listPresenter);

    this.taskListButton = document.getElementById('taskListButton');
    this.taskName = this.taskListButton.innerHTML;
    this.taskListButton.addEventListener("click", (e) => { this.onClick(e); e.preventDefault();});
  }

  onClick(evt) {
    console.log("OnClick event: taskName is " + this.taskName);
    let taskList = new TaskList.TaskList(this.taskName);
    let newContent = this.listPresenter.paint(taskList);

    //document.getElementById('todos').appendChild(document.createTextNode("bar"));

     $('#todos').append(newContent);
  }
}
