describe("ListPresenter", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  let ListPresenter = require("../js/ListPresenter");
  let ToDo = require("../js/ToDo");
  let IdGenerator = require("../js/IdGenerator");
  beforeEach(function() {
    setFixtures('<div id=\'todos\'></div>');
  });

  it("Displays a to do item", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Mow the lawn", new IdGenerator.IdGenerator()));

    expect(global.document.getElementById("1.0").innerHTML).toEqual("Mow the lawn");
  });

  it("Displays delete button button", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Paint the Shed", new IdGenerator.IdGenerator()));

    expect(global.document.getElementById("1.1").innerHTML).toBe("Delete");
  });

  it("Calls remove when delete button is clicked", function() {
    let presenter = new ListPresenter.ListPresenter();
    let todo = new ToDo.ToDo("Sheer the sheep", new IdGenerator.IdGenerator());

    presenter.paint(todo);
    console.log("TESTid to remove is: " + todo.uniqueId);
    presenter.remove(todo.uniqueId);

    expect(global.document.getElementById("1.0").innerHTML).toEqual(null);
    expect(global.document.getElementById("1.1")).toEqual(null);
  });
});
