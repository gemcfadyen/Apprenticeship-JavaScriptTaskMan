export class ListPresenter {

  paint(todo) {
    let todoElement = document.createElement('p');
    todoElement.setAttribute('id', todo.uniqueId + ".0");
    let contentsOftodoElement = document.createTextNode(todo.description);
    todoElement.appendChild(contentsOftodoElement);

    let deleteButtonElement = document.createElement('button');

    deleteButtonElement.setAttribute('id', todo.uniqueId + ".1");
    let contentsOfdeleteButtonElement = document.createTextNode('Delete');
    deleteButtonElement.appendChild(contentsOfdeleteButtonElement);

    document.getElementById('todos').appendChild(todoElement);
    document.getElementById('todos').appendChild(deleteButtonElement);
  }
}
