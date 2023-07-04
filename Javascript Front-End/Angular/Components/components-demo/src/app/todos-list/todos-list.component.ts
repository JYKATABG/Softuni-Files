import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  @Input() todos: Todo[] = [];
  status: boolean = false;

  onComplete(todo: Todo) {
    for (let arrTodo of this.todos) {
      if (todo.id === arrTodo.id) {
        this.status = !this.status;
      }
    }
  }

  onDelete(todo: Todo) {
    this.todos = this.todos.filter((x) => x.id !== todo.id);
  }
}
