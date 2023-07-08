import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  addTodo(input: HTMLInputElement) {
    this.todoService.addTodo(input.value);
    input.value = '';
  }
}
