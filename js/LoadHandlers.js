import * as CreateHandlers from "../js/CreateTaskListClickHandler";
import * as ToDoPresenter from "../js/ToDoPresenter";

$( document ).ready(function() {
  console.log( "ready!" );
  new CreateHandlers.CreateTaskListClickHandler(new ToDoPresenter.ToDoPresenter());
});
