describe("Number Fountain", function() {
  let Fountain = require("../js/Fountain");

  it("gets a random number", function() {
    spyOn(Math, "random");

    let fountain = new Fountain.Fountain();
    fountain.generate();

    expect(Math.random).toHaveBeenCalled();
  });

});
