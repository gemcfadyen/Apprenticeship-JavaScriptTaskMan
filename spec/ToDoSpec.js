import * as ToDo from "../js/ToDo";

describe("ToDo", function() {

  it("has a specific task", function() {
    let toDo = new ToDo.ToDo("wash car");

    expect(toDo.description).toEqual("wash car");
  });

});
