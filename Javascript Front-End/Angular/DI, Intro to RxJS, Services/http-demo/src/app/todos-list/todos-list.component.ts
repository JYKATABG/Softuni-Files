import { Component, Input } from '@angular/core';
import { Todos } from '../types/Todos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  @Input() appTodos: Todos[] = [];
}