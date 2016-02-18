describe("Task List Create Button", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  global.$ = require('jquery');
  require('jasmine-jquery');
  let TaskList = require("../js/TaskList");
  let CreateTaskList = require("../js/CreateTaskListClickHandler");
  let ToDoPresenter = require("../js/ToDoPresenter");

  beforeEach(function() {
    setFixtures('<button id="taskListButton">Garden</button><p id="todos">oldContent</p>');
  });

  it("creates a new task list", function() {
    let toDoPresenter = new ToDoPresenter.ToDoPresenter();
    spyOn(toDoPresenter, "paint").and.returnValue("Updated");

    let clickHandler = new CreateTaskList.CreateTaskListClickHandler(toDoPresenter);

    global.$('#taskListButton').click();

    expect(global.document.getElementById('todos').innerHTML).toEqual("oldContentUpdated");
    expect(toDoPresenter.paint).toHaveBeenCalled();
  });
});
