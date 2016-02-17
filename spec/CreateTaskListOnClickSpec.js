describe("Task List Create Button", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  global.$ = require('jquery');
  require('jasmine-jquery');
  let TaskList = require("../js/TaskList");
  let CreateTaskList = require("../js/CreateTaskListClickHandler");

  //import jsdom from 'jsdom';
  //let doc = jsdom.jsdom();
  //global.window = doc.defaultView;
  //global.document = window.document;
  //global.$ = require('jquery')(global.window);
  //import 'jasmine-jquery';
  //import * as TaskList from "../js/TaskList";
  //import * as CreateTaskList from "../js/CreateTaskListClickHandler";

  it("creates a new task list", function() {
    setFixtures('<div id="taskListButton"></div>');
    spyOn($('#tagToReplace'), 'replaceWith');

    let clickHandler = new CreateTaskList.CreateTaskListClickHandler();

    global.$('#taskListButton').click();
    //updatedElement = document.getElementsByTagName("p");
    //expect(updatedElement[0].innerHTML).toEqual("updated");
  });

});
