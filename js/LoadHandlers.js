import * as CreateHandlers from "../js/CreateTaskListClickHandler";
import * as ListPresenter from "../js/ListPresenter";
import * as IdGenerator from "../js/IdGenerator";

$( document ).ready(function() {
  new CreateHandlers.CreateTaskListClickHandler(new ListPresenter.ListPresenter(), new IdGenerator.IdGenerator());
});
