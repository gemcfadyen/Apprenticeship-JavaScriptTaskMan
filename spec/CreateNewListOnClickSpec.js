import * as TaskList from "../js/CreateNewListOnClick";
import install from 'jasmine-es6';
install();

describe("Task List", function() {

  it("can create a new task list with a specified name", function() {
    let taskList = new TaskList.TaskList("Garden");

    expect(taskList.name).toEqual("Garden");
  });

  //should have empty to do list

});
