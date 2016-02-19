import * as IdGenerator from "../js/IdGenerator";
import * as FakeFountain from "./FakeFountain";

describe("IdGenerator", function() {

  it("generates an id between a range", function(){
    let idGenerator = new IdGenerator.IdGenerator(1, 3, new FakeFountain.FakeFountain(2));

    let uniqueId = idGenerator.generate();

    expect(uniqueId).toEqual(5);
  });

});


