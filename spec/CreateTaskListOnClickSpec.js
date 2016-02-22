describe("Task List Create Button", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  require('jasmine-jquery');
  let CreateTaskList = require("../js/CreateTaskListClickHandler");
  let ListPresenter = require("../js/ListPresenter");
  let IdGenerator = require("../js/IdGenerator");

  beforeEach(function() {
    setFixtures('<textarea id="taskListBox">Wash the floor</textarea><button id="taskListButton"></button>');
  });

  it("Displays the To Do item entered", function() {
    let listPresenter = new ListPresenter.ListPresenter();
    spyOn(listPresenter, "paint");

    new CreateTaskList.CreateTaskListClickHandler(listPresenter, new IdGenerator.IdGenerator());
    global.document.getElementById('taskListButton').click();

    expect(listPresenter.paint).toHaveBeenCalled();
  });
});
