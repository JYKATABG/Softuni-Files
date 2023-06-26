import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  toDoInput: string = '';
  todoList: string[] = [];
  newTodo = '';

  onKey(event: any) {
    this.toDoInput = event.target.value;
  }

  addNewToDo() {
    if (this.toDoInput != '') {
      this.newTodo = this.toDoInput;
      this.todoList.push(this.newTodo);
    }
  }

  checkClick(event: any) {
    if (event.target.matches('.complete')) {
      event.target.closest('li').classList.toggle('completed');
      event.target.classList.toggle('completed');
    } else if (event.target.matches('.delete')) {
      this.deleteToDo(event);
    } else if (event.target.matches('.edit')) {
      this.editToDo(event);
    }
  }

  deleteToDo(event: any) {
    event.target.closest('li').remove();
  }

  editToDo(eveny: any) {

  }
}
