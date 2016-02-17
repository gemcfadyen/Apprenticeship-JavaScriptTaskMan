export class CreateTaskListClickHandler {
  constructor() {
    this.taskListButton = document.getElementById('taskListButton');
    this.taskListButton.addEventListener('click', function(e) {console.log('Hiya'); e.preventDefault();});
    //this.taskListButton = $('#taskListButton');
    //this.taskListButton.click(function() {console.log('Hiya'); return false;});
  }

  onClick(evt) {
    alert("New button clicked!");
    $('p').replaceWith("updated");
  }
}
