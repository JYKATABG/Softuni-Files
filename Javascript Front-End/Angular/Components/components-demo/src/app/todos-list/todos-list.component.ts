import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  list: Todo[] = [];

  constructor(private todoService: TodoService) {
    const todos = todoService.getTodos();
    this.list = todos;
  }

  marked: boolean = false;
  completedTodo: boolean = false;

  onComplete(todo: Todo) {
    this.todoService.completeTodo(todo.id);
    this.marked = !this.marked;
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }
}
