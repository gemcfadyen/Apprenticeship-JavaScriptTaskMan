import * as ToDo from "../js/ToDo";
import * as IdGenerator from "../js/IdGenerator";

describe("ToDo", function() {

  it("has a specific task", function() {
    let toDo = new ToDo.ToDo("wash car", new IdGenerator.IdGenerator());

    expect(toDo.description).toEqual("wash car");
  });

  it("has a unique Id", function() {
    let idGenerator = new IdGenerator.IdGenerator();
    spyOn(idGenerator, "generate").and.returnValue(1);

    let toDo = new ToDo.ToDo("wash car", idGenerator);

    expect(toDo.uniqueId).toEqual(1);
    expect(idGenerator.generate).toHaveBeenCalled();
  });

});
