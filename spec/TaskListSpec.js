import * as TaskList from "../js/CreateNewListOnClick";
import * as ToDo from "../js/ToDo";
import install from 'jasmine-es6';
install();

describe("Task List", function() {

  it("has a specified name", function() {
    let taskList = new TaskList.TaskList("Garden");

    expect(taskList.name).toEqual("Garden");
  });

  it("has no todo's initially", function() {
    let taskList = new TaskList.TaskList("Exercise");

    expect(taskList.todos).toEqual([]);
  });

  it("can have a new ToDo item added", function() {
    let taskList = new TaskList.TaskList("Work");
    let toDo = new ToDo.ToDo("task");

    taskList.add(toDo);

    expect(taskList.todos.length).toEqual(1);
    expect(taskList.todos.pop().description).toEqual("task");
  });
});
