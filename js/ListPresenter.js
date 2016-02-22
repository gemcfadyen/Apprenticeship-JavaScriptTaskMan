export class ListPresenter {

  rootTag() {
    return {
      tagName: 'todos'
    }
  }

  todoTag() {
    return {
      tagName: 'p',
      id: 'id'
    }
  }

  deleteButton() {
    return {
      tagName: 'button',
      text: 'Delete',
      id: 'id'
    }
  }

  paint(todo) {
    let todoElement = this._createToDoTag(todo);
    let deleteButtonElement = this._createDeleteButton(todo);

    document.getElementById(this.rootTag().tagName).appendChild(todoElement);
    document.getElementById(this.rootTag().tagName).appendChild(deleteButtonElement);
  }

  remove(id) {
    let root = document.getElementById(this.rootTag().tagName);
    let taskToRemove = document.getElementById(this._todoTagId(id));
    let buttonToRemove = document.getElementById(this._deleteButtonTagId(id));

    root.removeChild(taskToRemove);
    root.removeChild(buttonToRemove);
  }

  _createToDoTag(todo) {
    let todoElement = document.createElement(this.todoTag().tagName);
    todoElement.setAttribute(this.todoTag().id, this._todoTagId(todo.uniqueId));

    let contentsOftodoElement = document.createTextNode(todo.description);
    todoElement.appendChild(contentsOftodoElement);
    return todoElement;
  }

  _createDeleteButton(todo) {
    let deleteButtonElement = document.createElement(this.deleteButton().tagName);
    deleteButtonElement.setAttribute(this.deleteButton().id, this._deleteButtonTagId(todo.uniqueId));
    deleteButtonElement.addEventListener("click", (e) => {this.remove(todo.uniqueId); e.preventDefault();});

    let contentsOfdeleteButtonElement = document.createTextNode(this.deleteButton().text);
    deleteButtonElement.appendChild(contentsOfdeleteButtonElement);

    return deleteButtonElement;
  }

  _todoTagId(id) {
    return id + ".0";
  }

  _deleteButtonTagId(id) {
    return id + ".1";
  }
}
