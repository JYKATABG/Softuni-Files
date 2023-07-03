import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-app';

  todos: Todo[] = [
    { id: 1, text: 'Clean your room', complete: false },
    { id: 2, text: 'Walk the dog', complete: false },
    { id: 3, text: 'Throw the trash', complete: false },
  ];

  addTodo(input: HTMLInputElement) {
    let todo: Todo = {
      id: this.generateRandomId(),
      text: input.value,
      complete: false,
    };
    this.todos.push(todo);
    input.value = '';
    console.log(this.todos);
  }

  generateRandomId() {
    return Number(Math.floor(Math.random() * 100));
  }
}
