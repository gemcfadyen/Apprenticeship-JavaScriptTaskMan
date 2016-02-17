import * as ToDo from "../js/ToDo";
import install from 'jasmine-es6';
install();

describe("ToDo", function() {

  it("has a specific task", function() {
    let toDo = new ToDo.ToDo("wash car");

    expect(toDo.description).toEqual("wash car");
  });

});
