export class ListPresenter {

  paint(todo) {
    let todoElement = document.createElement('p');
    todoElement.setAttribute('id', todo.uniqueId + ".0");
    let contentsOftodoElement = document.createTextNode(todo.description);
    todoElement.appendChild(contentsOftodoElement);

    let deleteButtonElement = document.createElement('button');
    console.log("DELETE Button id: " + todo.uniqueId + ".1");
    deleteButtonElement.addEventListener("click", (e) => {this.remove(todo.uniqueId); e.preventDefault();});
    deleteButtonElement.setAttribute('id', todo.uniqueId + ".1");

    let contentsOfdeleteButtonElement = document.createTextNode('Delete');
    deleteButtonElement.appendChild(contentsOfdeleteButtonElement);

    document.getElementById('todos').appendChild(todoElement);
    document.getElementById('todos').appendChild(deleteButtonElement);
  }

  remove(id) {
    console.log("the remove id is: " + id);
    console.log("Removed!");

    let taskToRemove = document.getElementById(id +".0");
    let buttonToRemove = document.getElementById(id +".1");

    let root = document.getElementById('todos');
    root.removeChild(taskToRemove);
    root.removeChild(buttonToRemove);
  }
}
