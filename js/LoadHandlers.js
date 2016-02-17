import * as CreateHandlers from "../js/CreateTaskListClickHandler";
//install();

$( document ).ready(function() {
  console.log( "ready!" );
  new CreateHandlers.CreateTaskListClickHandler();
});
