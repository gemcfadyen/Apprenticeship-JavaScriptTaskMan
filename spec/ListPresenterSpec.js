describe("ListPresenter", function() {
  let jsdom = require('jsdom').jsdom;
  let doc = jsdom();
  global.window = doc.defaultView;
  global.document = window.document;

  let ListPresenter = require("../js/ListPresenter");

  let ToDo = require("../js/ToDo");
  beforeEach(function() {
    setFixtures('<div id=\'todos\'></div>');
  });

  it("Displays a to do item", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Mow the lawn"));

    expect(global.document.getElementById('foo').innerHTML).toEqual("Mow the lawn");
  });

  it("Displays delete button button", function() {
    let presenter = new ListPresenter.ListPresenter();
    presenter.paint(new ToDo.ToDo("Paint the Shed"));

    expect(global.document.getElementById('bar').innerHTML).toBe("Delete");
  });
});
