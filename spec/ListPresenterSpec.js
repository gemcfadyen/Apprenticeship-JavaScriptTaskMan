import * as ListPresenter from "../js/ListPresenter";
import * as TaskList from "../js/TaskList";

describe("ListPresenter", function() {
//  let jsdom = require('jsdom').jsdom;
//  let doc = jsdom();
//  global.window = doc.defaultView;
//  global.document = window.document;
//
//  global.$ = require('jquery');
//  require('jasmine-jquery');
//  let TaskList = require("../js/TaskList");
//  let CreateTaskList = require("../js/CreateTaskListClickHandler");
//  let ListPresenter = require("../js/ListPresenter");

  it("Publishes name of list", function() {
    let taskList = new TaskList.TaskList("Garden");
    let presenter = new ListPresenter.ListPresenter();

    let htmlForTaskList = presenter.paint(taskList);

    expect($(htmlForTaskList).html()).toEqual("Garden");
  });

});
