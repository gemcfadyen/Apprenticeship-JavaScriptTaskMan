export class ListPresenter {

  paint(list) {
    console.log("inside list presenter " + list.name);

    let htmlForTitle = $("<h2></h2>").text(list.name);
    console.log("Html for title is: " + $(htmlForTitle).html());
    return htmlForTitle;
  }
}
