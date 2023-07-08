import { Injectable } from '@angular/core';
import { Todo } from './interfaces/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  appTodos: Todo[] = [];

  readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor() {}

  getTodos() {
    return this.appTodos;
  }

  addTodo(input: string) {
    this.appTodos.push({
      id: this.appTodos.length,
      title: input,
      completed: false,
    });
  }

  completeTodo(id: number) {
    const completedTodo = this.appTodos.filter((x) => x.id == id)[0];
    completedTodo.completed = !completedTodo.completed;
  }

  deleteTodo(id: number) {
    const deleteIndex = this.appTodos.findIndex((x) => x.id == id);
    this.appTodos.splice(deleteIndex, 1);
  }
}
