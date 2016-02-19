describe("ListPresenter", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  let ListPresenter = require("../js/ListPresenter");
  let ToDo = require("../js/ToDo");
  let IdGenerator = require("../js/IdGenerator");

  let presenter;
  beforeEach(function() {
    setFixtures('<div id=\'todos\'></div>');
    presenter = new ListPresenter.ListPresenter();
  });

  it("Scenario Test: Adds then removes a to-do task", function() {
    presenter.paint(new ToDo.ToDo("Mow the lawn", new IdGenerator.IdGenerator()));

    expect(global.document.getElementById("1.0").innerHTML).toEqual("Mow the lawn");
    expect(global.document.getElementById("1.1").innerHTML).toBe("Delete");

    presenter.remove("1");

    expect(global.document.getElementById("1.0")).toEqual(null);
    expect(global.document.getElementById("1.1")).toEqual(null);
  });
});
