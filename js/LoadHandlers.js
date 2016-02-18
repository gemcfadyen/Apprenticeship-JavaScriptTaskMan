import * as CreateHandlers from "../js/CreateTaskListClickHandler";
import * as ListPresenter from "../js/ListPresenter";

$( document ).ready(function() {
  console.log( "ready!" );
  new CreateHandlers.CreateTaskListClickHandler(new ListPresenter.ListPresenter());
});
