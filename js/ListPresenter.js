export class ListPresenter {

  paint(todo) {
    let todoElement = document.createElement('p');
    todoElement.setAttribute('id', 'foo');
    let contentsOftodoElement = document.createTextNode(todo.description);
    todoElement.appendChild(contentsOftodoElement);

    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.setAttribute('id', 'bar');
    let contentsOfdeleteButtonElement = document.createTextNode('Delete');
    deleteButtonElement.appendChild(contentsOfdeleteButtonElement);
console.log("Unique id of to do: " + todo.uniqueId);
    document.getElementById('todos').appendChild(todoElement);
    document.getElementById('todos').appendChild(deleteButtonElement);
  }
}
