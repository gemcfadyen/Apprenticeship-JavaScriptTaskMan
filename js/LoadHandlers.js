import * as CreateHandlers from "../js/CreateTaskListClickHandler";
import * as ListPresenter from "../js/ListPresenter";
import * as IdGenerator from "../js/IdGenerator";

$( document ).ready(function() {
  console.log( "ready!" );
  new CreateHandlers.CreateTaskListClickHandler(new ListPresenter.ListPresenter(), new IdGenerator.IdGenerator());
});
