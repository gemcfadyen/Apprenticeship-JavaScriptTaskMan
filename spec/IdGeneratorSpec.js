import * as IdGenerator from "../js/IdGenerator";

describe("IdGenerator", function() {

  it("generates a number", function(){
    let idGenerator = new IdGenerator.IdGenerator();

    let uniqueId = idGenerator.generate();

    expect(uniqueId).toEqual(1);
  });

  it("increments", function() {

    let idGenerator = new IdGenerator.IdGenerator();
    idGenerator.generate();
    let uniqueId = idGenerator.generate();

    expect(uniqueId).toEqual(2);
  });

});


