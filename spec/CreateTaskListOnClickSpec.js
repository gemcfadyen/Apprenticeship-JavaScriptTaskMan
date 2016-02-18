describe("Task List Create Button", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  global.$ = require('jquery');
  require('jasmine-jquery');
  let TaskList = require("../js/TaskList");
  let CreateTaskList = require("../js/CreateTaskListClickHandler");
  let ListPresenter = require("../js/ListPresenter");

  beforeEach(function() {
    setFixtures('<button id="taskListButton">Garden</button><p id="todos">oldContent</p>');
  });

  it("creates a new task list", function() {
    let listPresenter = new ListPresenter.ListPresenter();
    spyOn(listPresenter, "paint").and.returnValue("Updated");

    let clickHandler = new CreateTaskList.CreateTaskListClickHandler(listPresenter);

    global.$('#taskListButton').click();

    expect(global.document.getElementById('todos').innerHTML).toEqual("oldContentUpdated");
    expect(listPresenter.paint).toHaveBeenCalled();
  });
});
