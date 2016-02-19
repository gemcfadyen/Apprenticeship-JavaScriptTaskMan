describe("ListPresenter", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  let ListPresenter = require("../js/ListPresenter");

  let ToDo = require("../js/ToDo");
  let IdGenerator = require("../js/IdGenerator");
  let FakeFountain = require("./FakeFountain");

  beforeEach(function() {
    setFixtures('<div id=\'todos\'></div>');
  });

  it("Displays a to do item", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Mow the lawn", new IdGenerator.IdGenerator(1, 3, new FakeFountain.FakeFountain(1))));

    expect(global.document.getElementById('foo').innerHTML).toEqual("Mow the lawn");
  });

  it("Displays delete button button", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Paint the Shed", new IdGenerator.IdGenerator(1, 3, new FakeFountain.FakeFountain(2))));

    expect(global.document.getElementById('bar').innerHTML).toBe("Delete");
  });
});
