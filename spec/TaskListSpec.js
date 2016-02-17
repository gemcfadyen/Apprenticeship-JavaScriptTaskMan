import * as TaskList from "../js/TaskList";
import * as ToDo from "../js/ToDo";

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
