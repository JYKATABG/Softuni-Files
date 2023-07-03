import { Component, Input } from '@angular/core';
import { Todos } from '../types/Todos';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input() appTodos: Todos | undefined = undefined;
}
